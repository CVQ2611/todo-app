import { Spin } from "antd";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { loadingApp } from "../../store/selectors";
import FormLogIn from "../formLogIn";
import ImageHader from "../imageHeader";
import LabelUser from "../labelUser";
import styles from './logInContainer.module.css';
const cx = classNames.bind(styles)

function LogInContainer() {
    const isLoading = useSelector(loadingApp);

    return (
        <Spin spinning={isLoading}>
            <div className={cx('wrapper')}>
                <div className={cx('header-image')}>
                    <ImageHader />
                </div>
                <div className={cx('header-text')}>
                    <p className={cx('inner-text')}>
                        Welcome back to
                    </p>
                    <p className={cx('title-text')}>
                        OUR REMINDER
                    </p>
                </div>
                <div className={cx('form')}>
                    <FormLogIn />
                </div>
                <LabelUser to={'register'}>Don’t have an account ? </LabelUser>
            </div>
        </Spin>
    )
}

export default LogInContainer;