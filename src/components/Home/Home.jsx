import React from 'react'

import Post from '../Post/Post'

import posts from '../../data/mock/posts.json'

const Home = () => {
  return (
    <div className='home'>
      {posts.map((post) => (<Post key={post._id} {...post} />))}
    </div>
  )
}

export default Home