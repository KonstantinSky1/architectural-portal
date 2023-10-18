import React, { useState } from 'react'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DataGrid, ruRU } from '@mui/x-data-grid'

import './TabContentInWork.css'

import arrowUpSmallIcon from '../../images/arrow-up-small-icon.svg'
import magnifierSmallIcon from '../../images/magnifier-small-icon.svg'
import { ReactComponent as datepickerIcon } from '../../images/datepicer-calendar-icon.svg'
import {  ReactComponent as rightArrowDatepickerIcon } from '../../images/right-arrow-datepicker-icon.svg'
import {  ReactComponent as leftArrowDatepickerIcon } from '../../images/left-arrow-datepicker-icon.svg'

import { generateTableData } from '../../utils/generateTableData'
import { useColumns } from './tableSettings'

const TabContentInWork = () => {
  const [startDate, setStartDate] = useState(null)
  const [finishDate, setFinishDate] = useState(null)

  const tableTestData = generateTableData(100)

  const { columns } = useColumns()

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
          <div className='datepicker-wrapper'>
            <DatePicker
              localeText={{
                fieldDayPlaceholder: () => 'ДД',
                fieldMonthPlaceholder: () => 'ММ',
                fieldYearPlaceholder: () => 'ГГГГ'

              }}
              sx={{
                width: "178px",
                background: '#fff',
                input: {
                  color: '#727FA2',
                  fontWeight: '500',
                  fontFamily: 'Montserrat',
                  textAlign: 'center',
                },
              }}
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slots={{
                openPickerIcon: datepickerIcon,
                leftArrowIcon: leftArrowDatepickerIcon,
                rightArrowIcon: rightArrowDatepickerIcon,
              }}
              slotProps={{
                textField: { placeholder: 'С какого числа' },
                inputAdornment: {
                  position: 'start',
                },
              }}
            />
          </div>
          <div className='datepicker-wrapper'>
            <DatePicker
              localeText={{
                fieldDayPlaceholder: () => 'ДД',
                fieldMonthPlaceholder: () => 'ММ',
                fieldYearPlaceholder: () => 'ГГГГ'

              }}
              sx={{
                width: "178px",
                background: '#fff',
                input: {
                  color: '#727FA2',
                  fontWeight: '500',
                  fontFamily: 'Montserrat',
                  textAlign: 'center',
                },
              }}
              value={finishDate}
              onChange={(newValue) => setFinishDate(newValue)}
              slots={{
                openPickerIcon: datepickerIcon,
                leftArrowIcon: leftArrowDatepickerIcon,
                rightArrowIcon: rightArrowDatepickerIcon,
              }}
              slotProps={{
                textField: { placeholder: 'По какое число' },
                inputAdornment: {
                  position: 'start',
                },
              }}
            />
          </div>
          <button
            type='button'
            className='export-list-expertise__export-btn button'
          >
            Экспортировать
          </button>
        </div>
      </div>
      <p className='tab-content-in-work__title'>Запросы на экспертизу: В работе</p>
      <form className='tab-content-in-work__search-blocks'>
        <div className='tab-content-in-work__search-block tab-content-in-work__search-block_big'>
          <img
            src={magnifierSmallIcon}
            alt='Лупа'
          />
          <input
            type="text"
            name="search-name"
            placeholder="Наименование"
          />
        </div>
        <div className='tab-content-in-work__search-block tab-content-in-work__search-block_small'>
          <img
            src={magnifierSmallIcon}
            alt='Лупа'
          />
          <input
            type="text"
            name="search-version"
            placeholder="Версия"
          />
        </div>
      </form>
      <div className='table-block'>
        <DataGrid
          columns={columns}
          rows={tableTestData || []}
          initialState={{
              columns: {
                  columnVisibilityModel: {
                      id: false,
                  },
              },
              pagination: {
                  paginationModel: {
                      pageSize: 10,
                  },
              },
          }}
          pageSizeOptions={[5, 10, 25]}
          localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
      />
      </div>
    </div>
  )
}

export { TabContentInWork }