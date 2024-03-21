import { Link } from "react-router-dom"
import { PostType } from "../types/PostType"



const CardPost = ({ id, title, body }: PostType) => {

  return (

    <div className="card_post" key={id}>
      <div style={{ color: 'red' }}>{id}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/post/${id}`} ><button className="btn">open</button></Link>
    </div>

  )
}

export default CardPost
