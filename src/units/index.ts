import * as yup from "yup";

export const schemaRegister = yup.object({
    fullName: yup.string().required('Please enter your Full Name'),
    email: yup.string().required('Please enter your Email')
        .email('Plase enter true Email'),
    password: yup.string()
        .required('Please enter your Password')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "Password is min 8 characters, 1 upper case, 1 lower case, 1 number, 1 special character "),
    confirmPassword: yup.string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Your password do not match.')
})

export const schemaLogin = yup.object({
    email: yup.string().required('Please enter your Email')
        .email('Plase enter true Email'),
    password: yup.string()
        .required('Please enter your Password'),
})