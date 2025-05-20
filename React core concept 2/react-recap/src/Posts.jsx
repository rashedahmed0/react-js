import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts() {
    let [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1>Posts : {post.length}</h1>
            {
                post.map(p => <Post post={p}></Post>)
            }
            <hr />
        </div>
    )
}