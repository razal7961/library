import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-secondary mt-3  ' style={{height:'300px'}}>
      <div className='row'>
        <div className='col-3 d-flex align-items-center' style={{width:'300px'}}>
        <img src="https://th.bing.com/th/id/OIP.wWddlrL1fR_2KEufj7L2kAHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='m-4 img-fluid ' style={{height:'100px',float:'left'}} alt="" />
        <h2 className='text-light col-3 d-flex justify-content-center align-items-center' style={{width:'200px'}} >LIBRARY</h2>
        </div>
       
        <div className='col-1 m-5 ' style={{width:'100px'}}>
        <h2 className='text-light' >Links</h2>
       <Link to='/log'> <button className=' btn text-light'>Login</button></Link>
       <Link to='/reg'><button className='btn text-light'>Signup</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
