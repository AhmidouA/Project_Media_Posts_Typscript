import React from 'react'

const Posts = () => {
  return (
    <div className="post-container">
        <h1>Home Page</h1>
            <div>
                <label htmlFor='posts'>Nombre de publication 5</label>
                <input type='range' min={1} max={20} />
            </div>
    </div>
  )
}

export default Posts