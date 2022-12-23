import image from '../../access/img/Done.png';
import classNames from 'classnames/bind';
import styles from "./imageHeader.module.css";

const cx = classNames.bind(styles)
function ImageHader() {
    return (
        <img src={image} alt={'img header'} className={cx('image-header')} />
    )
}
export default ImageHader