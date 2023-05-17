import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import Axios from 'axios'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import * as auth from '../../Validation/Signup_Validation'
// import * as apiHandler from '../../Validation/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'

export default function Register() {
  let navigate = useNavigate()
  const apiLink = process.env.AUTH_URL
  const signUpKey = `signup`

  async function saveUserData(values) {
    const { data } = await Axios.post(`${apiLink}${signUpKey}`, values)

    if (data.message === 'success') {
      toast.success(
        'Congratulations, your account has been successfully created.'
      )
      navigate('/login')
    } else {
      toast.error('Email is already registered')
    }
  }

  return (
    <div className="row">
      <div className="col-md-7 mx-auto mt-4">
        <div className="card py-3 px-4">
          <h2 className="text-center mb-3">Register</h2>
          <div className="card-content w-75 m-auto">
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptTerms: false,
              }}
              validationSchema={auth.validScheme}
              onSubmit={saveUserData}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Input
                    label={'First Name:'}
                    name={'first_name'}
                    type={'text'}
                    placeholder={'First Name'}
                    className={`form-control`}
                  />
                  <Input
                    label={'Last Name:'}
                    name={'last_name'}
                    type={'text'}
                    placeholder={'Last Name'}
                    className={`form-control`}
                  />
                  <Input
                    label={'Email:'}
                    name={'email'}
                    type={'email'}
                    placeholder={'Email'}
                    className={`form-control`}
                  />
                  <Input
                    label={'Password:'}
                    name={'password'}
                    type={'password'}
                    placeholder={'Password'}
                    className={`form-control`}
                  />
                  <Input
                    label={'Confirm Password:'}
                    name={'confirmPassword'}
                    type={'password'}
                    placeholder={'Confirm Password'}
                    className={`form-control mb-2`}
                  />

                  <Input
                    label={'Accept Terms & Conditions'}
                    name={'acceptTerms'}
                    type={'checkbox'}
                    className={`mt-1 me-2 float-start`}
                  />
                  <div className="btns d-flex justify-content-center">
                    <Button
                      className={`btn btn-primary mt-2`}
                      type={'submit'}
                      disabled={isSubmitting}
                    >
                      Register
                    </Button>
                    <Button
                      className={`btn btn-danger mt-2 ms-3`}
                      type={'reset'}
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="text-center mt-3">
                    Already have an account ?
                    <Link to={'/login'} className={`ms-2`}>
                      Sign in
                    </Link>
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
