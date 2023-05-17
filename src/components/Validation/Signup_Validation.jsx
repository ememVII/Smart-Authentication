import * as Yup from 'yup'

export const nameRegex = /^.{3,13}$/i
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
export const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/

export const validScheme = Yup.object().shape({
    first_name: Yup.string().matches(nameRegex, 'Name must be between (3,13) characters').required('First Name is Required'),
    last_name: Yup.string().matches(nameRegex, 'Name must be between (3,13) characters').required('Last Name is Required'),
    email: Yup.string().matches(emailRegex, 'Invalid Email').required('Email is Required'),
    password: Yup.string().matches(passRegex, 'Password Must be between (8,16) characters and must include at least one upper case letter, one lower case letter, and one numeric digit').required('Password is Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Password confirmation is Required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
})