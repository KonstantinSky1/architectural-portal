import React from 'react'
import { useNavigate  } from 'react-router-dom'

import './PageNotFound.css'

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div className="pageNotFound">
      <h2 className="pageNotFound__title">404</h2>
      <p className="pageNotFound__text">страница не найдена</p>
      <button
        className="pageNotFound__button"
        onClick={() => navigate(-1)}
        type="button"
      >
        Назад
      </button>
    </div>
  );
}

export { PageNotFound }