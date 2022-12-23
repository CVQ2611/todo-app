import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadingSlice } from "../../store/reducers/loading";
import { schemaLogin } from "../../units";
import Button from "../button";
import ErrorText from "../commonts/erorrText/inde";
import styles from "./formLogIn.module.css";

const cx = classNames.bind(styles);
interface Inputs {
    email: string,
    password: string,
}
function FormLogIn() {
    const navigatee = useNavigate()
    const dispath = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(
        { resolver: yupResolver(schemaLogin) }
    )
    const userOnLogIn: SubmitHandler<Inputs> = (data) => {
        dispath(loadingSlice.actions.SET_LOADING())
        setTimeout(() => {
            dispath(loadingSlice.actions.SET_LOADING())
            navigatee('/dashboard')
        }, 2000)

    }
    return (
        <form className={cx('form-logIn')} onSubmit={handleSubmit(userOnLogIn)}>
            <div className={cx('input-group')}>
                <input
                    type={'text'}
                    className={cx('input')}
                    placeholder={'Enter your email'}
                    {...register('email')}
                />
                <ErrorText>{errors.email?.message}</ErrorText>
            </div>
            <div className={cx('input-group')}>
                <input
                    type={'password'}
                    className={cx('input')}
                    placeholder={'Enter your password'}
                    {...register('password')}
                />
                <ErrorText>{errors.password?.message}</ErrorText>
            </div>

            <div className={cx('button-register')}>
                <Button primary type={'submit'}>
                    Sign In
                </Button>
            </div>
        </form>
    )
}

export default FormLogIn;