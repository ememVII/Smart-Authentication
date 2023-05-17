import React from 'react'
import { Link } from 'react-router-dom'
import pgNotFound from '../../../assets/images/undraw_page_not_found_re_e9o6.svg'

export default function NotFound() {
  return (
    <div className="row mt-4 d-flex align-items-center">
      <div className="col-md-6">
        <h2><span>Oops...</span> that page doesn't exist !</h2>
        <p className='h5'>Sorry, the page you were looking for could not be found.</p>
        <p>You can return to <Link to={'/home'}>Home</Link>, or <Link to={'/login'}>Login</Link></p>
      </div>
      <div className="col-md-6">
        <img src={pgNotFound} alt="404 page" className='w-100' />
      </div>
    </div>
  )
}