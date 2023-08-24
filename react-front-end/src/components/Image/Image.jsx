import axios from 'axios'
import React, {useState} from 'react'

const Image = () => {
    const [file, setFile] = useState()
    const upload = () => {
        const formData = new FormData()
        formData.append('file', file)
        axios.post('http://localhost:3000/products/', formData)
        .then ( res => {})
        .catch(error => console.log(error))
    }
    return (
        <div>
            <input type="file"  onChange={(e) => setFile(e.target.files[0])}/>
            <button type="button" onClick={upload}>Upload</button>
        </div>
    )
}

export default Image
