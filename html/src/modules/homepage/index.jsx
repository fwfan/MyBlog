import { PureComponent } from "react";
import ArticalCard from "../../components/ArticalCard";
import { message as antdMessage, Pagination } from "antd";
import axios from "axios";
import ArticleCardSkeletons from "./components/ArticleCardSkeletons";
import styles from "./index.module.scss";

class HomePage extends PureComponent {
  state = {
    articleList: [],
    total: 5,
    loaded: false,
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
          this.setState({ articleList: result, total, loaded: true });
        } else {
          antdMessage.error(message);
        }
      });
  }

  render() {
    return (
      <div className={styles["homepage"]}>
        <div className={styles["left"]}></div>
        <div className={styles["middle"]}>
          {this.state.loaded ? (
            this.state.articleList.map((item) => (
              <ArticalCard {...item} key={item.id}></ArticalCard>
            ))
          ) : (
           <ArticleCardSkeletons num={5}/>
          )}
          <div className={styles["homepage-pigination"]}>
            <Pagination defaultCurrent={1} total={this.state.total} />
          </div>
        </div>
        <div className={styles["right"]}></div>
      </div>
    );
  }
}

export default HomePage;
