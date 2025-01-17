import React, { useEffect, useState } from 'react'
import { forgotPassword } from '../services/allApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Forgotpassword() {

  const [data,setData]=useState()
  const navigate=useNavigate()

  console.log(data)

  const password=async(e)=>{
    e.preventDefault()
   
    if(!data.email){
      toast.warning('enter email')
    }
    else{
      console.log(data)
      const result=await forgotPassword(data)
      console.log(result)
      if(result.status===200){
        toast.success('valid email')
        const id=sessionStorage.setItem('id',result.data._id)
        console.log(id)

        navigate('/change')
      }
      else{
        toast.warning('invalid email')
      }
    }

  }
  


  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'400px'}}>
        <form action="">
        <h4 className='text-center'>Forgot Password</h4>
        <input type="email" name='email' className='form-control' placeholder='enter email' onChange={(a)=>setData({...data,email:a.target.value})} />
        <button className='btn btn-success form-control mt-3' onClick={(e)=>password(e)}>Submit</button>
        </form>
      
    </div>
  )
}

export default Forgotpassword
