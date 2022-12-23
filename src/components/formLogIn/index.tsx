import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../button";
import ErrorText from "../commonts/erorrText/inde";
import styles from "./formLogIn.module.css";

const cx = classNames.bind(styles);
interface Inputs {
    email: string,
    password: string,
}
function FormLogIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const userOnLogIn: SubmitHandler<Inputs> = (data) => {
        console.log(data);
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