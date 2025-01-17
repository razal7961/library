import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logStud } from '../services/allApi'
import { toast } from 'react-toastify'

function Login() {

  const[log,setLog]=useState()
  const navigate=useNavigate()

  console.log(log)

  const login=async(e)=>{
    e.preventDefault()
    const {email,password}=log
    if(!email || !password){
      alert('enter all values')
    }
    else{
      const result=await logStud(log)
      console.log(result)
      if(result.status===200 && result.data.role==='admin'){
        const id=sessionStorage.setItem('userid',result.data.result._id)
        const token=sessionStorage.setItem('token',result.data.token)
        const role=sessionStorage.setItem('role',result.data.role)
        toast.success('login successful')
        navigate('/admin')
      }
      else if(result.status===200 && result.data.role==='student'){
        sessionStorage.setItem('userid',result.data.result._id)
       sessionStorage.setItem('token',result.data.token)
        sessionStorage.setItem('role',result.data.role)
       
        toast.success('login successful')
        navigate('/student')
      }
      else{
        toast.error('login failed')
      }
    }

  }


  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'600px'}}>
        <form action="">
            <h2 className='text-center'>Login</h2>
            Email: <input type="email" name='email' className='form-control' onChange={(a)=>setLog({...log,email:a.target.value})} />
            Password: <input type="password" name='password' className='form-control' onChange={(a)=>setLog({...log,password:a.target.value})} />
            <Link to='/forgot'><a >forgot password?</a></Link>
            <button className='btn btn-success form-control mt-3' onClick={(e)=>login(e)}>Login</button>
           <Link to='/reg'> <button className='btn'>New user? sign up</button></Link>

        </form>
        
    </div>
  )
}

export default Login
