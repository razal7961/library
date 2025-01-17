import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { reservation } from '../services/allApi'
import { approve } from '../services/allApi'
import { increase } from '../services/allApi'
import { toast } from 'react-toastify'

function Viewreservation() {

const [reserve,setReserve]=useState()

const get=async()=>{
    const result=await reservation()
    console.log(result.data)
    setReserve(result.data)
}

const approved=async(item)=>{
    console.log(item)

    const approvestatus='approved'

    const data={
        bookid:item._id,
        status:approvestatus
    }
    console.log(data)

    const result=await approve(item._id,data)
    console.log(result)
    if(result.status===200){
        const result2=await increase(result.data.bookid)
        console.log(result2)
        if(result2.status===200){
            toast.success('book approved')
        }
       
    }
    else{
        toast.error('book not approved')
    }
}


useEffect(()=>{
    get()
},[])


    return (
        <div>
            <div className='row'>
                <div className='col-3 border' style={{width:'200px'}}>
                    <Sidebar />
                </div>
                <div className='col-9' style={{width:'900px',overflowX:'scroll'}}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Book Id</th>
                                <th>Student Id</th>
                                <th>Bookname</th>
                                <th>Booking date</th>
                                <th>Returndate</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reserve?.map(item=>(
                                    <tr>
                                        <td>{item.bookid}</td>
                                        <td>{item.studentid}</td>
                                        <td>{item.bookname}</td>
                                        <td>{item.bookingdate}</td>
                                        <td>{item.returndate}</td>
                                       
                                        {
                                            item.status==='returned'
                                            ?
                                            <td><button className='btn btn-primary' onClick={()=>{approved(item)}}>Approve</button></td>
                                            :
                                            <td>{item.status}</td> 

                                        }
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Viewreservation
