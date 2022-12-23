import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegister } from "../../units";
import Button from "../button";
import styles from "./formRegister.module.css";
import ErrorText from "../commonts/erorrText/inde";
import { useDispatch } from "react-redux";
import { loadingSlice } from "../../store/reducers/loading";
import { succesSlice } from "../../store/reducers/succes";
const cx = classNames.bind(styles);

interface Inputs {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
};
function RegisterForm() {
    const dispath = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(
        { resolver: yupResolver(schemaRegister) }
    )
    const userOnSubmit: SubmitHandler<Inputs> = (data) => {
        dispath(loadingSlice.actions.SET_LOADING())
        setTimeout(() => {
            dispath(loadingSlice.actions.SET_LOADING())
            dispath(succesSlice.actions.SET_SUCCESS())
        }, 2000)
    }
    return (
        <form className={cx('form-register')} onSubmit={handleSubmit(userOnSubmit)}>
            <div className={cx('input-group')}>
                <input
                    type={'text'}
                    className={cx('input')}
                    placeholder={'Enter your full name'}
                    {...register('fullName')}
                />
                <ErrorText>{errors.fullName?.message}</ErrorText>
            </div>
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
                    placeholder={'Enter password'}
                    {...register('password')}
                />
                <ErrorText>{errors.password?.message}</ErrorText>

            </div>
            <div className={cx('input-group')}>
                <input
                    type={'password'}
                    className={cx('input')}
                    placeholder={'Confirm Password'}
                    {...register('confirmPassword')}
                />
                <ErrorText>{errors.confirmPassword?.message}</ErrorText>
            </div>
            <div className={cx('button-register')}>
                <Button primary type={'submit'}>
                    Register
                </Button>
            </div>
        </form>
    )
}

export default RegisterForm;