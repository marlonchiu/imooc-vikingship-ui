import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UploadDemo: React.FC = () => {
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadFile = files[0]
      const formData = new FormData()
      formData.append(uploadFile.name, uploadFile)
      axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
  return (
    <div className="upload-demo" style={{ marginTop: '100px', marginLeft: '100px' }}>
      <input type="file" name="myFile" onChange={ handleFileChange}/>
    </div>
  )
}

export default UploadDemo
