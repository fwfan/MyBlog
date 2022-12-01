import { Skeleton } from "antd";
const ArticleCardSkeletons = (props) => {
  const skeletonsArr = [];
  for (let i = 0; i < props.num; i++) {
    skeletonsArr.push({ active: true, title: true, key: i });
  }
  return (
    <>
      {skeletonsArr.map((item) => (
        <div
          style={{
            margin: "12px 0px 0px 0px",
            border: "1px solid $gray-6",
            width: "100%",
            borderRadius: "6px",
            marginTop: "12px",
            transition: "box-shadow 0.5s",
          }}
        >
          <Skeleton {...item} />
        </div>
      ))}
    </>
  );
};

export default ArticleCardSkeletons;
