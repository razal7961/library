import React from 'react'
import { data, Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function Admin() {
  return (
    
    <div style={{height:'600px'}}>
      <div className='row'>
      <h1 className='text-center'>Admin DB</h1>
      <div className='col-3 mt-3' >
        <Sidebar />
      </div>

      <div className='col m-3'>
        <h3>Welcome Admin</h3>
      </div>

      </div>
     


    </div>
  )
}

export default Admin
