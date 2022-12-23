import classNames from "classnames/bind";
import Button from "../button";
import styles from "./infoUser.module.css";
import avatar from "../../access/img/user.png"
const cx = classNames.bind(styles);

function InfoUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={avatar} alt={'avatar'} />
            </div>
            <p className={cx('user-name')}>Monica Gamage</p>
            <p className={cx('user-id')}>@monicagamage</p>
            <Button small to={'/login'}>Log Out</Button>
        </div>
    )
}

export default InfoUser;