import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Post.css'

const Post = ({ _id, views, created, title, preview }) => {
  const navigate = useNavigate();

  const handleClickPost = (id) => {
    const path = `/blog/${id}`
    navigate(path)
  }
  return (
    <div className='post' onClick={() => handleClickPost(_id)}>
      <div className='post__header'>
        <div className='post__header__view'>
          <i className='bx bx-show'></i>
          <p>{views}</p>
        </div>
        <div className='dividing'></div>
        <div className='post__header__date'>
          <p>{created}</p>
        </div>
      </div>
      <div className='post__content'>
        <div className='post__content__title'>
          <i className='bx bxs-pencil'></i>
          <h3>{title}</h3>
        </div>
        <p className='post__content__preview'>{preview}</p>
      </div>
    </div>
  )
}

export default Post
