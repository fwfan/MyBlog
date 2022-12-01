const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  setWebpackOptimizationSplitChunks,
} = require("customize-cra");

const path = require("path");
module.exports = override(
  //按需加载antd
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // true是less，如果不用less style的值可以写'css'
  }),
  //   addLessLoader({
  //     lessOptions: {
  //       javascriptEnabled: true,
  //       modifyVars: { "@primary-color": "green" },
  //     },
  //   }),
  addWebpackAlias({
    src: path.resolve(__dirname, "./src"),
  }),

  setWebpackOptimizationSplitChunks({
    // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
    chunks: "async",
    // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
    minSize: 30000,
    maxSize: 500000,
    // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
    minChunks: 1,
    // 表示按需加载文件时，并行请求的最大数目。默认为30。
    maxAsyncRequests: 30,
    // 表示加载入口文件时，并行请求的最大数目。默认为30。
    maxInitialRequests: 30,
    // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
    automaticNameDelimiter: "~",
    // boolean = false  string function (module, chunks, cacheGroupKey) => string,也可用于每个cacheGroup： splitChunks.cacheGroups.{cacheGroup}.name。
    //拆分块的名称。提供false将保持块的相同名称，因此不会不必要地更改名称。这是生产构建的建议值。
    //提供字符串或函数使您可以使用自定义名称。指定字符串或始终返回相同字符串的函数会将所有通用模块和供应商合并为一个块。这可能会导致更大的初始下载量并减慢页面加载速度。
    name: false,
    //cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
    cacheGroups: {
      commons: {
        name: "chunk-commons",
        test: path.resolve(""), // can customize your rules
        priority: 5,
        minChunks: 2,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    }
  })
);
