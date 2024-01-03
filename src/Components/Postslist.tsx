import React from 'react'
import { useNavigate } from 'react-router-dom'

// Css
import './postsList.styles.css'

// Component
import { PostsData } from '../interfaces'


interface PostsListProps {
    allPosts : PostsData[] | null
};

const Post: React.FC<PostsListProps > = ({allPosts}) => {
  const navigate = useNavigate()

  return (
    <div>
      <ul className='posts'>
        {allPosts?.map((post) => (
          <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
            <h2>{post.title}</h2>
            <p>Lire l'article</p>
          </li>
        ))}

      </ul>     
    </div>
  )
}
export default Post
