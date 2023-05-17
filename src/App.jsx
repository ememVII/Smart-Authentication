import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Navbar from './components/Pages/Navbar/Navbar'
import Register from './components/Pages/Register/Register'
import Login from './components/Pages/Login/Login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './components/Validation/ProtectedRoute';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  const [token, setToken] = useState(null)
  const [userName, setUserName] = useState(null)
  
  let navigate = useNavigate()
  
  function saveUserData() {
    let encodedToken = localStorage.getItem('token')
    let decodedToken = jwtDecode(encodedToken)
    setToken(decodedToken)
    setUserName(decodedToken.first_name)
  }
  
useEffect(() => {
  if(localStorage.getItem('token')) {
    saveUserData()
  }
}, [])

  const logOutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
    <Navbar token={token} onLogOut={logOutHandler}/>
    <div className="container">
      <Routes>
        <Route path='/home' element={<ProtectedRoute><Home name={userName}/></ProtectedRoute>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login onSaveLoginData={saveUserData}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
