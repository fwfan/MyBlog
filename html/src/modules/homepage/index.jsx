import { PureComponent } from "react";
import ArticalCard from "../../components/ArticalCard";
import { Pagination } from "antd";
import styles from "./index.module.scss";

class HomePage extends PureComponent {
  render() {
    return (
      <div className={styles["homepage"]}>
        <div className={styles["left"]}></div>
        <div className={styles["middle"]}>
          <div>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
            <ArticalCard></ArticalCard>
          </div>
          <div className={styles["homepage-pigination"]}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        <div className={styles["right"]}></div>
      </div>
    );
  }
}

export default HomePage;
