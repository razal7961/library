import React, { useEffect } from 'react'
import { editbook } from '../services/allApi'
import { Button, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { useState } from 'react';
import { BASE_URL } from '../services/baseurl';
import { getBook } from '../services/allApi';
import { toast } from 'react-toastify';


function Editbook({ data }) {

  const [show, setShow] = useState(false);

  const [edit, setEdit] = useState({
    cover: data.cover,
    id: data._id,
    title: data.title,
    author: data.author,
    description:data.description,
    category: data.category,
    number: data.number

  })

  const [book, setBook] = useState({
    cover: data.cover,
    id: data._id,
    title: data.title,
    author: data.author,
    description:data.description,
    category: data.category,
    number: data.number
  })

  const [preview, setPreview] = useState("")
  const [token,setToken]=useState("")

  console.log(edit)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const getbook=async(id)=>{
  console.log(id)
  const result=await getBook(id)
  console.log(result)

}



  const update = async (e) => {
   
    const file = new FormData()
    file.append('cover', edit.cover)
    file.append('id', edit.id)
    file.append('title', edit.title)
    file.append('author', edit.author)
    file.append('description',edit.description)
    file.append('category', edit.category)
    file.append('number', edit.number)

    if (!edit.cover) {
      const headers = {
        'Content-Type': 'application/json','authorization':`Bearer ${token}`
      }
      const result = await editbook(book.id,file, headers)
      console.log(result)

      if (result.status === 200) {
        toast.success('data updated')
        getbook()
      }
      else {
        toast.error('updation failed')
      }
    }
    else {
      const header = {
        'Content-Type': 'multipart/form-data','authorization':`Bearer ${token}`
      }
      const result = await editbook(book.id,file,header)
      console.log(result)

      if (result.status === 200) {
        toast.success('data updated')
        
        getbook()
      }
      else {
        toast.error('updation failed')
      }
    }
  }

  useEffect(() => {
    if (edit.cover != book.cover) {
      setPreview(URL.createObjectURL(edit.cover))
    }
  }, [edit.cover])
  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    setEdit({...edit,userid:sessionStorage.getItem('userid')})
  },[])
  console.log(preview)


  return (
    <div>

      <Button onClick={handleShow}><i className="fa-solid fa-pen-to-square fa-lg"></i></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>

        <ModalBody>
          <div className='row'>
            <div className='col'>
              <label htmlFor="cover">
                <input type="file" name='cover' id='cover' style={{ display: 'none' }} onChange={(a) => setEdit({ ...edit, cover: a.target.files[0] })} />
                <img src={preview ? preview : `${BASE_URL}/upload/${book.cover}`} alt="" style={{ height: '200px', width: '200px' }} />
              </label>

            </div>

            <div className='col'>
              
              Title:<input type="text" name='title' className='form-control' defaultValue={edit.title} onChange={(a) => setEdit({ ...edit, title: a.target.value })} />
              Author: <input type="text" name='author' className='form-control' defaultValue={edit.author} onChange={(a) => setEdit({ ...edit, author: a.target.value })} />
              Description: <input type="text" name="description" className='form-control' defaultValue={edit.description} onChange={(a) => setEdit({ ...edit, description: a.target.value })} />
              Category: <input type="text" name='category' className='form-control' defaultValue={edit.category} onChange={(a) => setEdit({ ...edit, category: a.target.value })} />
              Number: <input type="number" name='number' className='form-control' defaultValue={edit.number} onChange={(a) => setEdit({ ...edit, number: a.target.value })} />

            </div>
          </div>
        </ModalBody>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={update}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Editbook
