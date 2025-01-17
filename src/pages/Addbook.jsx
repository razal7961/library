import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { addBook } from '../services/allApi'
import { use } from 'react'
import { toast } from 'react-toastify'

function Addbook() {

    const [book,setBook]=useState({
        cover:'',
        title:'',
        author:'',
        description:'',
        category:'',
        number:'',
        userid:''
    })

    const [addbook,setAddbook]=useState({
        cover:'',
        title:'',
        author:'',
        description:'',
        category:'',
        number:'',
        userid:''
    })

    const[preview,setPreview]=useState("")

    const [token,setToken]=useState("")


    console.log(book)
   
    

    const[validatetitle,setValidatetitle]=useState(true)
    const[validateauthor,setValidateauthor]=useState(true)
    const[validatedescription,setValidatedescription]=useState(true)
    const[validatecategory,setValidatecategory]=useState(true)
    const[validatenumber,setValidatenumber]=useState(true)

    const add=async(e)=>{
        e.preventDefault()
        const {cover,title,author,description,category,number}=book
        if(!cover || !title || !author || !description || !category || !number){
            toast.warning('enter all values')
        }
        else{
            const newbook=new FormData()
            newbook.append("cover",book.cover)
            newbook.append("title",book.title)
            newbook.append("author",book.author)
            newbook.append("description",book.description)
            newbook.append("category",book.category)
            newbook.append("number",book.number)
            newbook.append('userid',book.userid)

            const header={
                "Content-Type":"multipart/form-data","authorization":`Bearer ${token}`
            }

            const result=await addBook(newbook,header)
            console.log(result)

            if(result.status===200){
                toast.success('newbook is added')
            }
            else{
                toast.warning('addbook is failed')
            }


        }
    }

    const valid=(a)=>{
        const {name,value}=a.target

        if(name==='title'){
            if(!!value.match(/^[A-Z a-z]{1,}$/)){
                setBook({...book,[name]:value})
                setValidatetitle(true)
            }

            else{
                setBook({...book,[name]:value})
                setValidatetitle(false)
            }
        }
        else if(name==='author'){
            if(!!value.match(/^[A-Z a-z]{1,}$/)){
                setBook({...book,[name]:value})
                setValidateauthor(true)
            }
            else{
                setBook({...book,[name]:value})
                setValidateauthor(false)
            }
        }
        else if(name==='description'){
            if(!!value.match(/^[A-Z a-z]{1,}$/)){
                setBook({...book,[name]:value})
                setValidatedescription(true)
            }
            else{
                setBook({...book,[name]:value})
                setValidatedescription(false)
            }
        }
        else if(name==='category'){
            if(!!value.match(/^[A-Z a-z]{1,}$/)){
                setBook({...book,[name]:value})
                setValidatecategory(true)
            }
            else{
                setBook({...book,[name]:value})
                setValidatecategory(false)
            }
        }
        else if(name==='number'){
            if(!!value.match(/^[0-9]{1,}$/)){
                setBook({...book,[name]:value})
                setValidatenumber(true)
            }
            else{

                setBook({...book,[name]:value})
                setValidatenumber(false)
            }
        }
    }
    useEffect(()=>{
        if(book.cover !== addbook.cover){
            setPreview(URL.createObjectURL(book.cover))
        }
    },[book.cover])

    useEffect(()=>{
        setToken(sessionStorage.getItem('token'))
        setBook({...book,userid:sessionStorage.getItem("userid")})
    },[])


  return (
    <div>
        <div className='row'>
      
            <div className='col-3 border' style={{width:'200px'}}>
                <Sidebar/> 
             </div>

             

            <div className='col-9 '>
            <h2 className='text-center'>Add Book</h2>
          
                <form action="" className='row' >
                <div className='col-4 d-flex justify-content-center align-items-center'style={{width:'300px'}}>
                
                <label htmlFor="cover">
                    <input type="file" name='cover' id='cover' onChange={(a)=>setBook({...book,cover:a.target.files[0]})} style={{display:'none'}} />
                <img src={preview ? preview : "https://th.bing.com/th?id=OIP.1aePKbflTUtN9qGbpnraKAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} style={{width:'200px',height:'200px'}} alt="" />
                </label>

            </div> 
            <div className='col-7'style={{width:'400px'}}>
                    <input type="text" name='title' className='form-control' placeholder='Title' onChange={(a)=>valid(a)

                    } />
                    {
                        !validatetitle &&
                        <div className='text-danger'>invalid value</div>
                    }
                    <input type="text" name='author' className='form-control mt-2' placeholder='Author' onChange={(a)=>valid(a)} />
                    {
                        !validateauthor &&
                        <div className='text-danger'>invalid value</div>
                    }
                    <input type="text" name='description' className='form-control mt-2' placeholder='Description' onChange={(a)=>valid(a)} />
                    {
                        !validatedescription &&
                        <div className='text-danger'>invalid value</div>
                    }
                    <input type="text" name='category' className='form-control mt-2' placeholder='Category' onChange={(a)=>valid(a)} />
                    {
                        !validatecategory &&
                        <div className='text-danger'>invalid value</div>
                    }
                    <input type="number" name='number' className='form-control mt-2' placeholder='Number' onChange={(a)=>valid(a)} />
                    {
                        !validatenumber &&
                        <div className='text-danger'>invalid value</div>
                    }
                    <button className='btn btn-success form-control mt-3' onClick={add}>Add</button>
            </div>

                   
                </form>
            </div>

        </div>
      
    </div>
  )
}

export default Addbook
