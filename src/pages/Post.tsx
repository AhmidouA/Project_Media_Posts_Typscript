import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//CSS
import './Post.styles.css'

// Component
import { PostsData } from '../interfaces'
import PostDetail from '../Components/PostDetail'

const Post = () => {
    type PostParams = {
        id: string
    }
    const {id} = useParams<PostParams>()
    console.log("params id", id)

    const [onePost, setOnePost] = useState<PostsData | null >()

    console.log("onePost", onePost)

    useEffect(() => {
        const getPost = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data: PostsData = await response.json();
            // console.log("data", data);
            setOnePost(data);
        }
        getPost();

    }, [id])
    

  return (
    <div className='post-container'>
        <h1>Detail de la publication</h1>
        <PostDetail onePost={onePost}/>
    </div>
  )
}

export default Post;