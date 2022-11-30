import { PureComponent } from "react";
import Icon from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReactComponent as Read } from "../../images/read.svg";
import { ReactComponent as NewArticalTime } from "../../images/calendar.svg";
import { ReactComponent as Classification } from "../../images/checklist.svg";
import { ReactComponent as Author } from "../../images/brush.svg";
import moment from "moment";
import styles from "./index.module.scss";
import "katex/dist/katex.min.css";

class ArticalCard extends PureComponent {

  render() {
    return (
      <div
        className={styles["articalcard"]}
        onClick={() => console.log("sdsds")}
      >
        <div className={styles["articalcard-title"]}>{this.props.title}</div>
        <div className={styles["articalcard-classify"]}>
          <span>
            <Icon component={Classification} />
            {`${this.props.sub_type}`}
          </span>
          <span className={styles["articalcard-read-num"]}>
            <Icon component={Author} />
            {`${this.props.author}`}
          </span>
        </div>
        <div className={styles["articalcard-summary"]}>
          <ReactMarkdown
            children={this.props.summary+"..."}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code
                    className={styles["articalcard-summary-code-inline"]}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
            remarkPlugins={[remarkGfm, remarkMath]}
          />
        </div>
        <div className={styles["articalcard-des"]}>
          <span>
            <Icon component={NewArticalTime} />
            {moment(this.props.create_time).format("YYYY-MM-DD")}
          </span>
          <span className={styles["articalcard-read-num"]}>
            <Icon component={Read} />
            {this.props.total_view}
          </span>
        </div>
      </div>
    );
  }
}

export default ArticalCard;
