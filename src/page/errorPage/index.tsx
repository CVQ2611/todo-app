import { Result } from "antd";
import Button from "../../components/button";
import classNames from "classnames/bind";
import styles from './errorPage.module.css';
const cx = classNames.bind(styles)
function ErrorPage() {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Coming Soon!."
            extra={
                <div className={cx('button-error')}>
                    <Button primary to={'/'}>Back Home</Button>
                </div>
            }
        />
    )
}

export default ErrorPage;