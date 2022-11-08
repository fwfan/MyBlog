import { PureComponent } from "react";
import styles from "./index.module.scss";

class HomePage extends PureComponent {
  render() {
    return (
      <div className={styles["homepage"]}>
        <div className={styles["left"]}></div>
        <div className={styles["middle"]}>This is Home!</div>
        <div className={styles["right"]}></div>
      </div>
    );
  }
}

export default HomePage;
