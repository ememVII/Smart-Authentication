import React from 'react'
import { Form, Formik } from 'formik'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import * as auth from '../../Validation/Signin_Validation';
// import * as apiHandler from '../../Validation/Api'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";

export default function Login(props) {

  let navigate = useNavigate()
  const apiLink = process.env.AUTH_URL
  const signInKey = `signin`
  
  async function saveUserData(values) {
    let {data} = await Axios.post(`${apiLink}${signInKey}`, values)
    
    if(data.message === 'success') {
      toast.success('User Login Success.')
      localStorage.setItem('token', JSON.stringify(data.token))
      navigate('/home')
      props.onSaveLoginData(data.token)
    } else {
      toast.error('The email or password you entered is not valid, please try again.')
    }
  }
  
  return (
    <div className='row'>
    <div className="col-md-7 mx-auto mt-4">
        <div className="card py-3 px-4">
            <h2 className='text-center mb-3'>Log In</h2>
            <div className="card-content w-75 m-auto">
                <Formik 
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={auth.validScheme}
                    onSubmit={saveUserData}
                >
                    {({isSubmitting}) => (
                    <Form>
                        <Input label={'Email:'} name={'email'} type={'email'} placeholder={'Email'} className={`form-control`}/>
                        <Input label={'Password:'} name={'password'} type={'password'} placeholder={'Password'} className={`form-control`}/>

                        <div className="btns d-flex justify-content-center">
                            <Button className={`btn btn-primary mt-2`} type={'submit'} disabled={isSubmitting}>
                              Login
                            </Button>
                            <Button className={`btn btn-danger mt-2 ms-3`} type={'reset'}>Reset</Button>
                        </div>
                        <div className='text-center mt-3'>Don't have an account ? 
                            <Link to={'/register'} className={`ms-2`}>Sign up</Link>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
    
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={true}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  )
}
