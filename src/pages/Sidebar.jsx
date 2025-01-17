import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=''>
     
            <Link to='/admin'><a href=""><h4>Dashboard</h4></a></Link>
            <Link to='/addbook'><a href=""><h4>Add book</h4></a></Link>
            <Link to='/viewbook'><a href=""><h4>View books</h4></a></Link>
            <Link to='/viewstudent'><a href=""><h4>View students</h4></a></Link>
            <Link to='/editprofile'><a href=""><h4>Edit profile</h4></a></Link>
            <Link to='/viewreservation'><a href=""><h4>View Reservations</h4></a></Link>
            

    </div>
  )
}

export default Sidebar
