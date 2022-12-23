import classNames from "classnames/bind";
import Button from "../button";
import styles from "./labelUser.module.css";
const cx = classNames.bind(styles);
interface Props {
    children: any,
    to: string,
}
function LabelUser({ children, to }: Props) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <Button text to={`/${to}`}>
                {to === 'login' ? 'Sign In' : 'Sign Up'}
            </Button>
        </div>
    )
}
export default LabelUser;