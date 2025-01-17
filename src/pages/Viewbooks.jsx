import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getBook } from '../services/allApi'
import { BASE_URL } from '../services/baseurl'
import { deleteBook } from '../services/allApi'
import Editbook from './Editbook'
import { toast } from 'react-toastify'

function Viewbooks() {

    const [viewbook,setViewbook]=useState()
    

    const get=async()=>{
        const result=await getBook()
        console.log(result.data)
        setViewbook(result.data)
    }
    console.log(viewbook)

    
    const deleteitem=async(id)=>{
        
      const result=await deleteBook(id)
        if(result.status==200){
            get()
        }
        else{
            toast.success('item not deleted')
        }

        console.log(result)
    }


    useEffect(()=>{
        get()
    },[])




  return (
    <>
    <div>
        <div className='row'>
            <div className='col-2 border'style={{width:'200px'}}>
                <Sidebar/>
            </div>

            <div className='col-10' style={{width:'800px',overflowX:'scroll'}}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Number</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewbook?.map(item=>(
                                <tr>
                                    <td><img src={`${BASE_URL}/upload/${item.cover}`} style={{height:'100px',width:'130px'}} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.description}</td>
                                    <td>{item.category}</td>
                                    <td>{item.number}</td>
                                    <td><Editbook data={item}/></td>
                                    <td><button className='btn ' onClick={()=>{deleteitem(item._id)}}><i className="fa-solid fa-trash fa-lg"></i></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>

      
    </div>




    </>
  )
}

export default Viewbooks
