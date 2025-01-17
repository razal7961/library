import { BASE_URL } from "./baseurl";
import commonrequest from "./commonapi";

export const regStud=async(body,header)=>{
    return await commonrequest("POST",`${BASE_URL}/reg`,body,header)
}

export const logStud=async(body)=>{
    return await commonrequest("POST",`${BASE_URL}/log`,body,'')
}

export const forgotPassword=async(body)=>{
    return await commonrequest("POST",`${BASE_URL}/password`,body,'')
}

export const changePassword=async(id,body)=>{
    return await commonrequest("put",`${BASE_URL}/change/${id}`,body,'')
}

export const addBook=async(body,header)=>{
    return await commonrequest("POST",`${BASE_URL}/addbook`,body,header)
}

export const editProfile=async(header,body,id)=>{
    return await commonrequest("PUT",`${BASE_URL}/edit/${id}`,body,header)
}

export const getuser=async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/get/${id}`)
}

export const getBook=async()=>{
    return await commonrequest("GET",`${BASE_URL}/get`,'','')
}

export const deleteBook=async(id)=>{
    return await commonrequest("DELETE",`${BASE_URL}/delete/${id}`,{},'')
}

export const editbook=async(id,body,header)=>{
    return await commonrequest("PUT",`${BASE_URL}/editbook/${id}`,body,header)
}
export const getStudent=async()=>{
    return await commonrequest("GET",`${BASE_URL}/getstudent`,'','')
}
export const showBook=async(search)=>{
    return await commonrequest("GET",`${BASE_URL}/showbook?search=${search}`,'','')
}
export const studeditprofile=async(id,body,header)=>{
    return await commonrequest("PUT",`${BASE_URL}/editstud/${id}`,body,header)
}
export const getstud=async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/getstud/${id}`,'','')
}
export const booking=async(body)=>{
    return await commonrequest("POST",`${BASE_URL}/reserve`,body,'')
}
export const decrease=async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/decrease/${id}`,'','')
}
export const history=async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/history/${id}`,'','')
}
export const returned=async(id,body)=>{
    return await commonrequest("PUT",`${BASE_URL}/return/${id}`,body,'')
}
export const reservation=async()=>{
    return await commonrequest("GET",`${BASE_URL}/reservation`,'','')
}
export const approve=async(id,body)=>{
    return await commonrequest("PUT",`${BASE_URL}/approve/${id}`,body,'')
}
export const increase=async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/increase/${id}`,'','')
}