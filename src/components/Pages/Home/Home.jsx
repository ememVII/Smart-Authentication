import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../../../assets/images/undraw_welcome_re_h3d9.svg'
import { tools } from '../../../Utilities/Utilities'

import './Home.css'

export default function Home(props) {

  return (
    <div className="card mt-4">
        <div className="row pt-4 h-100">
          <div className="col-md-6 ps-4">
            <h2>
              Welcome <span className='red'>{props.name},</span>
            </h2>
            <p className="pt-2 h5 lh-base">
              <span className='red'>Smart Authentication</span> is a
              <span className='red'> React</span> aplication <br /> using
              a token based authentication system, <br /> User can't access if
              user is not authenticated{' '}
            </p>
            <p className="pt-2 h5 lh-base">
              <span className='red'>Tools used :</span>
            </p>
            <ul className="row">
              {tools.map((tool, i) => (
                <li key={i} className="col-md-6">
                  <span className='red'>• </span>
                  {tool}
                </li>
              ))}
            </ul>
            <p className="pt-2 h5 lh-base">
              <span className='red'>Where to find me ?</span>
            </p>
            <div className="content row">
              <div className="col-md-6">
                <div
                  className='d-flex justify-content-between w-75 fs-3 icon'
                >
                  <Link to={'#'} target={'_blank'}>
                    <i
                      className='fa-brands fa-facebook facebook'
                    ></i>
                  </Link>
                  <Link to={'#'} target={'_blank'}>
                    <i
                      className='fa-brands fa-linkedin linkedin'
                    ></i>
                  </Link>
                  <Link to={'https://github.com/ememVII'} target={'_blank'}>
                    <i className='fa-brands fa-github github'></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <span>
                  <i
                    className='fa-brands fa-whatsapp whatsapp fs-5 me-2'
                  ></i>
                  0100 127 5392
                </span>
                <p>
                  <i className="fa-regular fa-envelope fs-5 me-2"></i>
                  mmagdyhafiz2012@gmail.com
                </p>
              </div>
              
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src={homeIcon} alt="homeBg" className="w-100 img" />
          </div>
        </div>
      </div>
  )
}
