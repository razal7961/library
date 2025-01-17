import React, { useState } from 'react'
import { changePassword } from '../services/allApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Changepassword() {

    const [password, setPassword] = useState()
    console.log(password)

    const navigate=useNavigate()

    const change = async (e) => {
        e.preventDefault()
        const { newpassword, confirmpassword } = password

        if (newpassword === confirmpassword) {
            const id = sessionStorage.getItem('id')
            console.log(id)
            console.log(newpassword)
        
            const result = await changePassword(id,{newpassword})
            console.log(result)
            if (result.status === 200) {
                sessionStorage.clear()

                toast.success('password updation successful')
                navigate('/log')
            }
        else {
            toast.warning('password updation failed')
        }
    }
}


return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
        <form action="">
            <h4>Change password</h4>
            <input type="password" name='newpassword' className='form-control' placeholder='new password' onChange={(a) => setPassword({ ...password, newpassword: a.target.value })} />
            <input type="password" name='confirmpassword' className='form-control mt-2' placeholder='confirm password' onChange={(a) => setPassword({ ...password, confirmpassword: a.target.value })} />
            <button className='btn btn-success form-control mt-3' onClick={(e) => change(e)} >Submit</button>
        </form>




    </div>
)
}

export default Changepassword
