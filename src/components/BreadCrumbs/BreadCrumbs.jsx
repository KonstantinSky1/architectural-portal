import React from 'react'

import './BreadCrumbs.css'

import homeBreadCrumbsIcon from '../../images/home-bread-crumbs-icon.svg'

const BreadCrumbs = ({ style, pages = [] }) => {
  return (
    <div
      style={style}
    >
      {
        (pages?.length > 0) && (
          <div className='bread-crumbs'>
            <img
              src={homeBreadCrumbsIcon}
              alt='Домой'
            />
            {
              pages?.map((page, index) => (
                <div
                  className='bread-crumbs'
                  key={index}
                >
                  <span>/</span>
                  <span>{page}</span>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export { BreadCrumbs }