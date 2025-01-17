import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { regStud } from '../services/allApi'
import { toast } from 'react-toastify'

function Register() {

  const [data,setData]=useState({
    name:'',
    age:'',
    gender:'',
    address:'',
    email:'',
    password:'',
    profile:''

  })

  const [validatename,setValidatename]=useState(true)
  const [validateage,setValidateage]=useState(true)
  const [validateaddress,setValidateaddress]=useState(true)
  const [validateemail,setValidayeemail]=useState(true)
  const [validatepassword,setValidatepassword]=useState(true)

  const valid=(a)=>{
    const {name,value}=a.target

    if(name==='name'){
      if(!!value.match(/^[A-Z a-z]{1,}$/)){
        setData({...data,[name]:value})
        setValidatename(true)
      }
      else{
        setData({...data,[name]:value})
        setValidatename(false)
      }
    }

    else if(name==='age'){
      if(!!value.match(/^[0-9]{1,2}$/)){
        setData({...data,[name]:value})
        setValidateage(true)
      }
      else{
        setData({...data,[name]:value})
        setValidateage(false)
      }
    }

    else if(name==='address'){
      if(!!value.match(/^[a-z A-Z0-9,]{1,}$/)){
        setData({...data,[name]:value})
        setValidateaddress(true)
      }
      else{
        setData({...data,[name]:value})
        setValidateaddress(false)
      }
    }

    else if(name==='email'){
      if(!!value.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{3,}$/)){
        setData({...data,[name]:value})
        setValidayeemail(true)
      }
      else{
        setData({...data,[name]:value})
        setValidayeemail(false)
      }
    }

    else if(name==='password'){
      if(!!value.match(/^[a-z0-9]{4,8}$/)){
        setData({...data,[name]:value})
        setValidatepassword(true)
      }
      else{
        setData({...data,[name]:value})
        setValidatepassword(false)
      }
    }
  }

  console.log(data)

  const Register=async(e)=>{
    e.preventDefault()
    const {name,age,gender,address,email,password,profile}=data
    if(!name || !age || !gender || !address || !email || !password || !profile){
      toast.warning('enter all values')
    }
    else{
      const student=new FormData()
      student.append("name",data.name)
      student.append("age",data.age)
      student.append("gender",data.gender)
      student.append("address",data.address)
      student.append("email",data.email)
      student.append("password",data.password)
      student.append("profile",data.profile)

      const header={
        'Content-Type':'multipart/form-data'
      }

      const result=await regStud(student,header)
      console.log(result)

      if(result.status===200){
        toast.success('registration successful')
        setData({
          name:'',
          age:'',
          gender:'',
          address:'',
          email:'',
          password:'',
          profile:''
        })
      }
      else{
        toast.error('registration failed')
      }
    }
  }



  return (
    <div className='d-flex justify-content-center align-items-center 'style={{height:'600px'}}>
      <form action="">
        <h2 className='text-center'>Registration</h2>
        Name: <input type="text" name='name' value={data.name} className='form-control ' onChange={(a)=>valid(a)} />
        {
          !validatename &&
          <div className='text-danger'>invalid value</div>
        }
        Age: <input type="number" name='age' value={data.age} className='form-control'onChange={(a)=>valid(a)} />
        {
          !validateage &&
          <div className='text-danger'>invalid value</div>
        }
        Gender: <input type="radio" name='gender' value='male' className='form-check-input'onChange={(a)=>setData({...data,gender:a.target.value})} />male 
                <input type="radio" name='gender' value='female' className='form-check-input'onChange={(a)=>setData({...data,gender:a.target.value})} /> female <br /> 
        Address: <input type="text" name='address' value={data.address} className='form-control'onChange={(a)=>valid(a)} />
        {
          !validateaddress &&
          <div  className='text-danger'>invalid value</div>
        }
        Email: <input type="email" name='email' value={data.email} className='form-control'onChange={(a)=>valid(a)} />
        {
          !validateemail &&
          <div  className='text-danger'>invalid value</div>
        }
        password: <input type="password" name='password'value={data.password} className='form-control'onChange={(a)=>valid(a)} />
        {
          !validatepassword &&
          <div  className='text-danger'>invalid value</div>
        }
        Profile: <input type="file" required name='profile'  className='form-control' onChange={(a)=>setData({...data,profile:a.target.files[0]})} /> 
        <button className='btn btn-success form-control mt-3' onClick={Register}>Register</button>  
        <Link to='/log'><button className='btn'>Already a user? sign in</button></Link>     
      </form>
      

      
    </div>
  )
}

export default Register
