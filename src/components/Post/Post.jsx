import React from 'react'

import './Post.css'

import arrowRightPicIcon from '../../images/arrow-right-icon.svg'

const Post = ({ post }) => {
  const { title, id } = post

  return (
    <li className='post-item'>
      <div className='post-item__number'>{id}</div>
      <p className='post-item__title'>{title}</p>
      <div>
        <img
          src={arrowRightPicIcon}
          alt='Стрелка'
        />
      </div>
    </li>
  )
}

export { Post }