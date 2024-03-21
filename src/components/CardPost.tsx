import { Link } from "react-router-dom"
import { PostType } from "../types/PostType"



const CardPost = ({ id, title, body }: PostType) => {

  return (
    <Link to={`/post/${id}`} >
      <div className="card_post" key={id}>
        <div style={{ color: 'red' }}>{id}</div>
        <h3>{title}</h3>
        <p>{body}</p>
        <button className="btn"><Link to={`/post/${id}`} >open</Link></button>
      </div>
    </Link>
  )
}

export default CardPost
