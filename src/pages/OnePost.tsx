// import React from 'react'


import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostType } from "../types/PostType"


const OnePost = () => {
  const [data, setData] = useState<any>([])
  const navigate = useNavigate()
  const item = useParams()


  async function fetchOnePost() {
    await axios.get<any, AxiosResponse<any, any>, any>(`https://jsonplaceholder.typicode.com/posts?id=${item.id}`)
      .then((res) => setData(res.data))
      .catch(err => console.log(err))
    // return data
  }
  useEffect(() => {
    fetchOnePost()
  }, [item])

  return (
    <div className="one_container">


      {data.map((el: PostType) => (
        <div className="onepost" key={el.id}>
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
