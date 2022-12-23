import classNames from "classnames/bind";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({ children, primary, text, small, icon, ...props }: any) {
    let Comp: any = 'button';
    if (props.to) {
        Comp = Link
    }
    const classes = cx('wrapper-button', {
        primary,
        text,
        small,
        icon
    })
    return (
        <Comp className={classes} to={props.to} type={props.type}>
            <span>
                {children}
            </span>
        </Comp>
    )
}

export default Button;