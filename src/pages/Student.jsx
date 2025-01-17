import React, { useEffect, useState } from 'react'
import { showBook } from '../services/allApi'
import { BASE_URL } from '../services/baseurl'
import { Link } from 'react-router-dom'
import { booking } from '../services/allApi'
import History from './History'
import { decrease } from '../services/allApi'
import { toast } from 'react-toastify'

function Student() {

  const [book, setBook] = useState()
  const [reserve,setReserve]=useState({
    bookid:'',
    studentid:sessionStorage.getItem("userid"),
    bookname:'',
    bookingdate:''
  })

  const [search,setSearch]=useState("")
  console.log(search)
  

  const get = async () => {
    const result = await showBook(search)
    console.log(result.data)
    setBook(result.data)
  }

  const store=async(item)=>{
    console.log(item)
    const date=new Date()
    const getdate=date.getDate()
    const month=date.getMonth()+1
    const year=date.getFullYear()
    console.log(year)
    const bookingdate=`${getdate}-${month}-${year}`

    const data={
      bookid:item._id,
      bookname:item.title,
      studentid:reserve.studentid,
      bookingdate:bookingdate

    }
    console.log(data)

    const result=await booking(data)
    console.log(result)
    if(result.status==200){
      const result2= await decrease(data.bookid)
      console.log(result2)
      if(result2.status===200){
        toast.success('book reserved')
      }
      else{
        toast.warning('out of stock')
      }
     
    }
    else{
      toast.error('Already excisting book..!!')
    }
   

  }




  useEffect(() => {
    get()
  }, [search])

  console.log(reserve)

  return (
    <div style={{height:'800px', overflowX:"scroll" }}>

      <div className='d-flex justify-content-center m-3 '><input type="text" className='form-control' onChange={(a)=>setSearch(a.target.value)} placeholder='Search books here!' style={{ width: '600px' }} />
        <History/>
        <Link to='/studeditprofile'><button className='btn btn-secondary ms-3'>Edit profile</button></Link>
      </div>

      <div className='row'>
     
         {
          book?.map(item=>(
            <div className='col-lg-3'>
            <div className='card mb-5 border shadow text-center' style={{ height: '326px', width: '240px' }}>
              <img src={`${BASE_URL}/upload/${item.cover}`} alt="" className='img-fluid' style={{ height: '200px'}} />
              <h4>{item.title}</h4>
              <p>{item.author},{item.description}</p>
              {
                item.number>0?
                <button className='btn btn-success mb-2' onClick={()=>{store(item)}}>Reserve</button>:
                <button className='btn btn-warning mb-2' >out of stock</button>
              }

            </div>
          </div>
          ))
         }
      
      </div>


    </div>
  )
}

export default Student
