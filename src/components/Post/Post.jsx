import React from 'react'

const Post = ({ post }) => {
  const { title } = post

  return (
    <li>
      {title}
    </li>
  )
}

export { Post }