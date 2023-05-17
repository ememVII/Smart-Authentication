import * as Yup from 'yup'

export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
export const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/

export const validScheme = Yup.object().shape({
    email: Yup.string().matches(emailRegex, 'Invalid Email').required('Email is Required'),
    password: Yup.string().matches(passRegex, 'Password Must be between (8,16) characters and must include at least one upper case letter, one lower case letter, and one numeric digit').required('Password is Required')
})