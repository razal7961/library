import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { editProfile } from '../services/allApi'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../services/baseurl'
import { getuser } from '../services/allApi'
import { toast } from 'react-toastify'

function Editprofile() {

    const [data, setData] = useState({
        name: '',
        age: '',
        gender: '',
        address: '',
        email: '',
        password: '',
        profile: '',
        _id:''
    })

    const [edit, setEdit] = useState({
        name: '',
        age: '',
        gender: '',
        address: '',
        email: '',
        password: '',
        profile: ''

    })

    const [preview, setPreview] = useState("")
    console.log(data._id)
    console.log(edit)



    const getUser = async (id) => {
        console.log(id)
         const result = await getuser(id)
         console.log(result)
        
          setData(result.data)
         setEdit(result.data)
     }

     const update=async(e)=>{
        e.preventDefault()
        console.log(edit)
        const user=new FormData()
        user.append('name',edit.name)
        user.append('age',edit.age)
        user.append('gender',edit.gender)
        user.append('address',edit.address)
        user.append('email',edit.email)
        user.append('password',edit.password)
        user.append('profile',edit.profile)

       if(!edit.profile){
       const headers={
            'Content-Type':'application/json'
        }
       const result=await editProfile(headers,user,data._id)
       console.log(result)
       if(result.status===200){
        toast.success('successfully updated')
     
        getUser(result.data._id)
       }
       else{
        toast.error('updation failed')
       }
     }
     else{
        const header={
            'Content-Type':'multipart/form-data'
        }
        const result=await editProfile(header,user,data._id)
        console.log(result)
         if(result.status===200){
            toast.success('successfully updated')
            setData(result.data)
            setEdit(result.data)
    
	    getUser(result.data._id)
       

         }
         else{
            toast.error('updation failed')
         }
    }
     }



     useEffect(() => {
         if (edit.profile != data.profile) {
            setPreview(URL.createObjectURL(edit.profile))
         }
     },[edit.profile])

    useEffect(() => {
        const id=sessionStorage.getItem('userid')
        getUser(id)
        
    }, [])
    console.log(preview)

console.log(edit)
    return (
        <div>
            <div className='row'>
                <div className='col-3 border' style={{width:'200px'}}>
                    <Sidebar />
                </div>

                <div className='col-8'>
                    <h2 className='text-center'>Edit profile</h2>
                    <form action="" className='row'>
                        <div className='col-4 d-flex justify-content-center align-items-center' style={{width:'300px'}}>
                            <label htmlFor="profile">
                                <input type="file" name='profile' id='profile' onChange={(a) => setEdit({ ...edit, profile: a.target.files[0] })} style={{display:'none'}} />
                                <img src={preview? preview: `${BASE_URL}/upload/${data.profile}`} style={{ height: '200px', width: '200px' }} className='m-5' alt="" />
                            </label>

                        </div>
                        <div className='col-6' style={{width:'400px'}}>
                            <input type="text" name='name' className='form-control' defaultValue={edit.name} placeholder='name' onChange={(a) => setEdit({ ...edit, name: a.target.value })} />
                            <input type="number" name="age" className="form-control mt-2" defaultValue={edit.age} placeholder='age' onChange={(a) => setEdit({ ...edit, age: a.target.value })} />
                            gender: <input type="radio" name='gender' value='male' defaultValue={edit.gender} checked={edit.gender==='male'} className='form-check-input' onChange={(a) => setEdit({ ...edit, gender: a.target.value })} />male
                            <input type="radio" name="gender" value='female' defaultValue={edit.gender} checked={edit.gender==='female'} className='form-check-input' onChange={(a) => setEdit({ ...edit, gender: a.target.value })} />female
                            <input type="text" name='address' className='form-control mt-2'defaultValue={edit.address} placeholder='address' onChange={(a) => setEdit({ ...edit, address: a.target.value })} />
                            <input type="email" name='email' className='form-control mt-2' defaultValue={edit.email} placeholder='email' onChange={(a) => setEdit({ ...edit, email: a.target.value })} />
                            <input type="password" name='password' className='form-control mt-2' defaultValue={edit.password} placeholder='password' onChange={(a) => setEdit({ ...edit, password: a.target.value })} />
                            <button className='btn btn-success form-control' onClick={update}>Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Editprofile