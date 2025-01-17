import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Header() {

  const navigate=useNavigate()


  const logout=async()=>{
    sessionStorage.clear()
    navigate('/log')

  }

  


  return (
    <div className='d-flex justify-content-evenly align-items-center  bg-dark' style={{height:"80px"}}>
      <img src="https://th.bing.com/th/id/OIP.wWddlrL1fR_2KEufj7L2kAHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='' style={{height:'50px',float:'left'}} alt="" />
      <h1 className='text-light' >LIBRARY</h1>
      
      {
        sessionStorage.getItem("userid") ?
        <button className='btn btn-danger mt-4'style={{height:'50px'}} onClick={logout}>Logout</button>
        :
        <Link to='/log'><button className='btn btn-primary mt-4' style={{height:'50px'}}>Login</button></Link>


      }
      
      
      
    </div>
  )
}

export default Header
