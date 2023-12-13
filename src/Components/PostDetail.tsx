import React from 'react'

// Css
import './postDetail.styles.css'

// component
import { PostsData } from '../interfaces'
import { Link } from 'react-router-dom'

interface PostDetailProps {
    onePost: PostsData | null | undefined
}

const PostDetail: React.FC <PostDetailProps> = ({onePost}) => {

  return (
    <div className='post'>
        <h1>Publication numéro: {onePost?.id}</h1>
        <h2>Titre: {onePost?.title}</h2>
        <p>{onePost?.body}</p>
        <Link to={'/'}>Home Page</Link>
    </div>
  )
}

export default PostDetail;