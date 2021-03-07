import * as a from 'axios'
import { Content } from './fakeDB'
const axios = a.default

const baseURL: string = process.env.VUE_APP_API_ROOT

async function createFile(title: string, file: File, description: string){
    const url = `${baseURL}/files`
    const formData = new FormData()
    formData.append("title",title)
    formData.append("file",file)
    formData.append("description",description)
    const res = await axios.post<{id:string}>(url, formData)
    return res.data
}

export type tempRes = {
    id: string;
    uploadTimeStamp: number;
    title: string;
}

async function listFiles(){
    const url = `${baseURL}/files`
    const res = await axios.get<Content[]>(url)
    return res.data
}

async function getFile(id : string){
    const url = `${baseURL}/files/${id}`
    const res = await axios.get<Content>(url)
    return res.data
}

async function deleteFile(id: string){
    const url = `${baseURL}/files/${id}`
    const res = await axios.delete<Content>(url)
}

export {
    createFile,
    listFiles,
    getFile,
    deleteFile
}