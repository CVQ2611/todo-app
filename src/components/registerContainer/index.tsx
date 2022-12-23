import classNames from "classnames/bind";
import RegisterForm from "../formRegister";
import ImageHader from "../imageHeader";
import LabelUser from "../labelUser";
import styles from './registerContainer.module.css';
const cx = classNames.bind(styles);
function RegisterContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-image')}>
                <ImageHader />
            </div>
            <div className={cx('header-text')}>
                <div className={cx('text-inner')}>
                    Get’s things done with TODO
                </div>
                <div className={cx('text-title')}>
                    Let’s help you meet up your tasks
                </div>
            </div>
            <div className={cx('form')}>
                <RegisterForm />
            </div>
            <LabelUser to={'login'}>Already have an account ?</LabelUser>
        </div>
    )
}

export default RegisterContainer;