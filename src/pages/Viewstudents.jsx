import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getStudent } from '../services/allApi'
import { BASE_URL } from '../services/baseurl'

function Viewstudents() {

  const [viewstudent,setViewstudent]=useState()

const view=async()=>{
  const result=await getStudent()
  console.log(result.data)
  setViewstudent(result.data)
}
console.log(viewstudent)

useEffect(()=>{
  view()
},[])

  return (
    <div>
      <div className='row'>
        <div className='col-2 border'style={{width:'200px'}}>
          <Sidebar />
        </div>

        <div className='col-9' style={{width:'800px',overflowX:'scroll'}}>
          <div>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>gender</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {
                  viewstudent?.map(item=>(
                    <tr>
                      <td>{item.name}</td>
                      <td>{item._id}</td>
                      <td>{item.age}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td><img src={`${BASE_URL}/upload/${item.profile}`} style={{height:'100px',width:'100px'}} alt="" /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Viewstudents
