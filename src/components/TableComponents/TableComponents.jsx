import React from 'react'

import './TableComponents.css'

import yesIcon from '../../images/chech-yes-icon.svg'
import xNoIcon from '../../images/x-no-icon.svg'

const TableComponentYes = () => {
  return (
    <div className='table-component-yes yes-no'>
      <img
        src={yesIcon}
        alt='Да'
      />
      <span>Да</span>
    </div>
  )
}

const TableComponentNo = () => {
  return (
    <div className='table-component-no yes-no'>
      <img
        src={xNoIcon}
        alt='Нет'
      />
      <span>Нет</span>
    </div>
  )
}

export { TableComponentYes, TableComponentNo }