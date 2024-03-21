import axios from "axios";

export async function fetchPosts() {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  console.log(data)
  return data.data
}

