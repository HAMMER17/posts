// import React from 'react'


import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const OnePost = () => {
  const [data, setData] = useState<any>([])
  const navigate = useNavigate()
  const item = useParams()
  console.log(item)

  async function fetchOnePost() {
    await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${item.id}`)
      .then((res) => setData(res.data))

    // return data
  }
  useEffect(() => {
    fetchOnePost()
  }, [])
  console.log(data)
  return (
    <div className="one_container">


      {data.map((el: any) => (
        <div className="onepost">
          <h3>Id</h3>
          <h1>{el.id}</h1>
          <hr />
          <h4>Title</h4>
          <h3>{el.title}</h3>
          <hr />
          <h4>Text</h4>
          <p>{el.body}</p>
        </div>
      ))}
      <button className="btn" onClick={() => navigate('/')}>BACK</button>
    </div>


  )
}

export default OnePost
