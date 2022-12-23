import classNames from "classnames/bind";
import Button from "../button";
import ImageHader from "../imageHeader";
import styles from "./wellcomeContainer.module.css";

const cx = classNames.bind(styles);

function WellcomeContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-image')}>
                <ImageHader />
                <div className={cx('wellcome-text')}>
                    <div className={cx('wellcome-text_header')}>
                        <div className={cx('text-header_inner')}>
                            Wellcome to
                        </div>
                        <div className={cx('text-header__content')}>
                            OUT REMINDER
                        </div>
                    </div>
                    <div className={cx('wellcome-text_title')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum dictum tempus, interdum at dignissim metus.
                        Ultricies sed nunc.
                    </div>
                </div>
                <div className={cx('start-button')}>
                    <Button to={'/register'} primary> Start </Button>
                </div>
            </div>
        </div>
    )
}

export default WellcomeContainer;