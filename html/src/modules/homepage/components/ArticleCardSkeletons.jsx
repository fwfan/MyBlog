import { Skeleton } from "antd";
const ArticleCardSkeletons = (props) => {
  const skeletonsArr = [];
  for (let i = 0; i < props.num; i++) {
    skeletonsArr.push({ active: true, title: true ,key :i});
  }
  return (
    <>
      {skeletonsArr.map((item) => (
        <Skeleton {...item}/>
      ))}
    </>
  );
};

export default ArticleCardSkeletons;
