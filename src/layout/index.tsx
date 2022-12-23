import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./layout.module.css";

const cx = classNames.bind(styles);

function Layout() {
    return (
        <div className={cx('wrapper')}>
            <Outlet />
        </div>
    )
}

export default Layout;