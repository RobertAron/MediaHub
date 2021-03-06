import * as a from 'axios'
const axios = a.default

const baseURL: string = process.env.VUE_APP_API_ROOT

async function createFile(title: string, file: File){
    const formData = new FormData()
    formData.append("title",title)
    formData.append("file",file)
    const url = `${baseURL}/files`
    const res = await axios.post(url, formData,
        // {headers:{'Content-Type': 'multipart/form-data'}}
    )
    console.log(res)
}

export type tempRes = {
    id: string;
    uploadTimeStamp: number;
    title: string;
}

async function listFiles(){
    const url = `${baseURL}/files`
    const res = await axios.get<tempRes[]>(url)
    return res.data
}

export {
    createFile,
    listFiles
}