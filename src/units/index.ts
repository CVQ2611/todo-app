import * as yup from "yup";

export const schemaRegister = yup.object({
    fullName: yup.string().required('Please enter your Full Name'),
    email: yup.string().required('Please enter your Email')
        .email('Plase enter true Email'),
    password: yup.string()
        .required('Please enter your Password')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "Password is min eight characters, one upper case, one lower case, one number, one special character "),
    confirmPassword: yup.string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Your password do not match.')
})