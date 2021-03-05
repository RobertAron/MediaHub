import * as a from 'axios'
const axios = a.default

const baseURL: string = process.env.VUE_APP_API_ROOT
console.log("BASE")
console.log(baseURL)
async function createFile(title: string){
    const url = `${baseURL}/files`
    console.log(url)
    const res = await axios.post(url, {title})
    console.log(res)
}

export {
    createFile
}