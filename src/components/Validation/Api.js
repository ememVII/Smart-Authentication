import Axios from "axios"
import { toast } from 'react-toastify';

const apiLink = process.env.AUTH_URL
const signUpKey = `signup`
const signInKey = `signin`

export const signUpApi = async (values) => {
    let {data} = await Axios.post(`${apiLink}${signUpKey}`, values)
    
    {data.message === 'success' ? toast.success('Congratulations, your account has been successfully created.') : toast.error('Email is already registered')}
}

export const signInApi = async (values) => {
    let {data} = await Axios.post(`${apiLink}${signInKey}`, values)
    localStorage.setItem('userToken', data.token)
    
    {data.message === 'success' ? toast.success('User Login Success.') : toast.error('The email or password you entered is not valid, please try again.')}
}
