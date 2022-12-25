import classNames from "classnames/bind";
import Button from "../button";
import styles from "./infoUser.module.css";
import avatar from "../../access/img/user.png"
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function InfoUser() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const showQuesLogOut = () => {
        setShowModal(true)
    }

    const hideQuesLogOut = () => {
        setShowModal(false)
    }
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('avatar')}>
                    <img src={avatar} alt={'avatar'} />
                </div>
                <p className={cx('user-name')}>Monica Gamage</p>
                <p className={cx('user-id')}>@monicagamage</p>
                <Button small onClick={showQuesLogOut}>Log Out</Button>
            </div>
            <Modal
                open={showModal}
                onOk={() => {
                    hideQuesLogOut();
                    navigate('/login')
                }}
                onCancel={hideQuesLogOut}
                okText={'Log Out'}
                cancelText={'Cancel'}
            >
                Do you want Log Out?
            </Modal>
        </>
    )
}

export default InfoUser;