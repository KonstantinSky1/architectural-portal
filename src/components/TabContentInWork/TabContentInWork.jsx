import React, { useState } from 'react'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import './TabContentInWork.css'

import arrowUpSmallIcon from '../../images/arrow-up-small-icon.svg'
import { ReactComponent as datepickerIcon } from '../../images/datepicer-calendar-icon.svg'

const TabContentInWork = () => {
  const [startDate, setStartDate] = useState(null)
  const [finishDate, setFinishDate] = useState(null)

  return(
    <div className='tab-content-in-work'>
      <div className='export-list-expertise'>
        <button
          type='button'
          className='export-list-expertise__h-button'
        >
          <span>Экспорт списка запросов на экспертизу</span>
          <img
            src={arrowUpSmallIcon}
            alt='Стрелка'
          />
        </button>
        <p className='export-list-expertise__date'>Дата заключения:</p>
        <div className='export-list-expertise__dates-block'>
          <div className='test'>
            <DatePicker
              sx={{
                width: "178px",
                background: '#fff',
              }}
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slots={{
                openPickerIcon: datepickerIcon
              }}
              slotProps={{
                textField: { placeholder: 'С какого числа' },
                inputAdornment: {
                  position: 'start',
                },
              }}
            />
          </div>
          <DatePicker
            sx={{
              width: "178px",
              background: '#fff',
            }}
            value={finishDate}
            onChange={(newValue) => setFinishDate(newValue)}
            slots={{
              openPickerIcon: datepickerIcon
            }}
            slotProps={{
              textField: { placeholder: 'По какое число' },
              inputAdornment: {
                position: 'start',
              },
            }}
          />
          <button
            type='button'
            className='export-list-expertise__export-btn button'
          >
            Экспортировать
          </button>
        </div>
      </div>
    </div>
  )
}

export { TabContentInWork }