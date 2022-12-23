import classNames from "classnames/bind";
import styles from "./errorText.module.css";
const cx = classNames.bind(styles);

function ErrorText({ children }: any) {
    return (
        <div className={cx('error-text')}>{children}</div>
    )
}

export default ErrorText