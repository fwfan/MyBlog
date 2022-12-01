import { PureComponent } from "react";
import ArticalCard from "../../components/ArticalCard";
import { message, Pagination, Skeleton } from "antd";
import axios from "axios";
import styles from "./index.module.scss";

class HomePage extends PureComponent {
  state = {
    articleList: [<Skeleton />,<Skeleton />,<Skeleton />,<Skeleton />,<Skeleton />,],
    total: 5,
  };

  componentDidMount() {
    axios
      .get("/rest/api/article/article_list", {
        params: {
          query: JSON.stringify({ start: 0, limit: 5 }),
        },
      })
      .then((res) => {
        const { success, total, result, message } = res.data;
        if (success) {
          this.setState({ articleList: result, total });
        } else {
          message.error(message);
        }
        console.log(res);
      });
  }

  render() {
    return (
      <div className={styles["homepage"]}>
        <div className={styles["left"]}></div>
        <div className={styles["middle"]}>
          {this.state.articleList.map((item) => (
            <ArticalCard {...item}></ArticalCard>
          ))}
          <div className={styles["homepage-pigination"]}>
            <Pagination defaultCurrent={1} total={this.props.total} />
          </div>
        </div>
        <div className={styles["right"]}></div>
      </div>
    );
  }
}

export default HomePage;
