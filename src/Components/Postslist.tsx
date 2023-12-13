import React from 'react'
import './postsList.styles.css'

// Component
import { PostsData } from '../interfaces'


interface PostsListProps {
    allPosts : PostsData[] | null
};

const Post: React.FC<PostsListProps > = ({allPosts}) => {
  return (
    <div>
      <ul className='posts'>
        {allPosts?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Lire l'article</p>
          </li>
        ))}

      </ul>     
    </div>
  )
}

export default Post