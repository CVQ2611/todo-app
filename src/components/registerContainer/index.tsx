import classNames from "classnames/bind";
import { loadingApp, successNoti } from "../../store/selectors";
import RegisterForm from "../formRegister";
import { Modal, Spin } from "antd";
import ImageHader from "../imageHeader";
import LabelUser from "../labelUser";
import styles from './registerContainer.module.css';
import { useDispatch, useSelector } from "react-redux";
import { succesSlice } from "../../store/reducers/succes";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
function RegisterContainer() {
    const dispath = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(loadingApp);
    const isSucces = useSelector(successNoti);
    if (isSucces) (
        Modal.success({
            content: 'Success ! Go to Log In?',
            onOk() {
                dispath(succesSlice.actions.SET_SUCCESS())
                navigate('/login')
            }
        })
    )
    return (
        <Spin spinning={isLoading} >
            <div className={cx('wrapper')}>
                <div className={cx('header-image')} >
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
        </Spin>
    )
}

export default RegisterContainer;