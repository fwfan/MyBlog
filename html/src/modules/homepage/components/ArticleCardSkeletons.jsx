import { Skeleton } from "antd";
const ArticleCardSkeletons = (props) => {
  const skeletonsArr = [];
  for (let i = 0; i < props.num; i++) {
    skeletonsArr.push({ active: true, title: true, key: i });
  }
  return (
    <>
      {skeletonsArr.map((item) => (
        <div style={{ margin: "12px 0px 0px 0px" }}>
          <Skeleton {...item} />
        </div>
      ))}
    </>
  );
};

export default ArticleCardSkeletons;
