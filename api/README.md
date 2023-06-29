
# nodejs服务

# 安装守护进程
npm install forever -g

# 运行
forever start ./app.js

# 停止
forever stop ./app.js 

# 查看运行的进程
forever list

# 查看端口占用情况
netstat -anp |grep 3636

# 重启所有应用
forever restartall