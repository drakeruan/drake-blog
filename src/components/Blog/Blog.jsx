import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import data from '../../data/mock/posts.json'

const Blog = () => {
  const [post, setPost] = useState(null)
  const { blogId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const postFound = data.find(post => post._id === blogId)
      setPost(postFound)
    }, 500)

  })

  return <div>
    {post
      ? <div>
        <p>{post.title}</p>
        <p>{post.created}</p>
      </div>
      : <p>Loading...</p>}
  </div>

}

export default Blog