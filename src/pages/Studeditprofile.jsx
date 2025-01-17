import React, { useEffect, useState } from 'react'
import { studeditprofile } from '../services/allApi'
import { getstud } from '../services/allApi'
import { BASE_URL } from '../services/baseurl'
import { toast } from 'react-toastify'


function Studeditprofile() {

  const [edit,setEdit]=useState({
    name:'',
    age:'',
    gender:'',
    address:'',
    email:'',
    password:'',
    profile:'',
    _id:''
  })
  const [stud,setStud]=useState({
    name:'',
    age:'',
    gender:'',
    address:'',
    email:'',
    password:'',
    profile:''
  })
  const [preview,setPreview]=useState("")
  console.log(preview)
  console.log(edit)
  

  const getStud= async(id)=>{
    const result=await getstud(id)
    console.log(result)

    setEdit(result.data)
    setStud(result.data)
  }

  const update=async(e)=>{
    e.preventDefault()
    console.log(edit)
    const student=new FormData()
    student.append('name',edit.name)
    student.append('age',edit.age)
    student.append('gender',edit.gender)
    student.append('address',edit.address)
    student.append('email',edit.email)
    student.append('password',edit.password)
    student.append('profile',edit.profile)

    if(!edit.profile){
      const header={
        'Content-Type':'application/json'
      }
      const result=await studeditprofile(edit._id,student,header)
      console.log(result)
      if(result.status===200){
        toast.success('updation success')
        getStud(edit._id)
      }
      else{
        toast.error('updation failed')
      }
    }
    else{
      const headers={
        'Content-Type':'multipart/form-data'
      }
      const result =await studeditprofile(edit._id,student,headers)
      console.log(result)
      if(result.status===200){
        toast.success('updation success')
        getStud(edit._id)
      }
      else{
        toast.error('updation failed')
      }
    }
  }

  useEffect(()=>{
    if(edit.profile != stud.profile){
      setPreview(URL.createObjectURL(edit.profile))
    }
  },[edit.profile])

  useEffect(()=>{
    const id=sessionStorage.getItem('userid')
    getStud(id)
  },[])
 
console.log(edit.profile)
  return (
    <div>
      <div className='card d-flex justify-content-center align-items-center container mt-5' style={{width:'300px'}}>
       <form action="" className='m-3' >
        <div className=''>
            <label htmlFor="profile">
              <input type="file" name='profile' id='profile'  onChange={(a) => setEdit({ ...edit, profile: a.target.files[0] })}  style={{display:'none'}}/>
                <img src={preview? preview: `${BASE_URL}/upload/${stud.profile}`} alt="" style={{height:'200px',width:'200px'}} className='mt-3' />
            </label>
        </div>
        Name: <input type="text" className='form-control' defaultValue={edit.name} onChange={(a)=>setEdit({...edit,name:a.target.value})} />
        Age: <input type="number" className='form-control' defaultValue={edit.age} onChange={(a)=>setEdit({...edit,age:a.target.value})} />
        gender: <input type="radio" name="gender" value='male' defaultValue={edit.gender} checked={edit.gender==='male'} className='form-check-input' onChange={(a)=>setEdit({...edit,gender:a.target.value})} />male
        <input type="radio" name='gender' value='female'defaultValue={edit.gender} checked={edit.gender==='female'} className='form-check-input' onChange={(a)=>setEdit({...edit,gender:a.target.value})} /> female <br />
        Address: <input type="text" className='form-control' defaultValue={edit.address} onChange={(a)=>setEdit({...edit,address:a.target.value})} />
        Email: <input type="email" name='email' className='form-control' defaultValue={edit.email} onChange={(a)=>setEdit({...edit,email:a.target.value})} />
        Password: <input type="password" name="password" className='form-control' defaultValue={edit.password}  onChange={(a)=>setEdit({...edit,password:a.target.value})} />
        <button className='btn btn-success form-control mt-3' onClick={update}>Update</button>

       </form>

      </div>
    </div>
  )
}

export default Studeditprofile
