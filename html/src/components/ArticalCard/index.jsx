import { PureComponent } from "react";
import styles from "./index.module.scss";

class ArticalCard extends PureComponent {
  render() {
    return (
      <div className={styles["articalcard"]}>
        <div className={styles["articalcard-title"]}>title</div>
        {/* <div className={styles["articalcard-info"]}>info</div> */}
        <div>summary</div>
        <div>buttons</div>
      </div>
    );
  }
}

export default ArticalCard;
