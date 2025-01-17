import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { history } from '../services/allApi';
import { returned } from '../services/allApi';
import { toast } from 'react-toastify';

function History() {

    const[show,setShow]=useState(false)
    const [viewhistory,setViewhistory]=useState([])

   const History=async(id)=>{
    console.log(id)
    const result =await history(id)
    console.log(result.data)
    setViewhistory(result.data)
   }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        const id=sessionStorage.getItem('userid')
        History(id)
    },[])
    console.log(viewhistory)


const Returned=async(item)=>{
    console.log(item)
    const date=new Date()
const day=date.getDate()
const month=date.getMonth()+1
const year=date.getFullYear()
const returndate=`${day}-${month}-${year}`
const returnstatus='returned'


const data={
    
    returndate:returndate,
    status:returnstatus
}
console.log(data)
console.log(returndate)

const result=await returned(item._id,data)
console.log(result)
if(result.status===200){
    toast.suucess('book returned')
}
else{
    toast.error('book not returned')
}

}


  return (

    <div>
    <Button onClick={handleShow}>History</Button>

    <Modal show={show} className='modal-lg ' onHide={handleClose} >
        <ModalHeader>
            <ModalTitle>History</ModalTitle>
        </ModalHeader>
        <ModalBody className='overflow-x-scroll'>

            <table className='table table-bordered '>
                <thead>
                    <tr>
                        <th></th>
                        <th>Bookname</th>
                        <th>Bookingdate</th>
                        <th>Returndate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewhistory?.map((item,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.bookname}</td>
                                <td>{item.bookingdate}</td>
                                <td>{item.returndate}</td>
                                <td><button className='btn btn-warning' onClick={()=>{Returned(item)}}>Return</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </table>
         
        </ModalBody>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>        
        </Modal.Footer>
    </Modal>

      
    </div>
  )
}

export default History
