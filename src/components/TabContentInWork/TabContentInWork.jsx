import React, { useState } from 'react'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DataGrid, ruRU, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import MuiPagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'

import { ReactComponent as nextPagePaginationIcon } from '../../images/pagination-right-page-icon.svg'
import { ReactComponent as prevPagePaginationIcon } from '../../images/pagination-left-page-icon.svg'
import { ReactComponent as firstPagePaginationIcon } from '../../images/pagination-left-lastpage-icon.svg'
import { ReactComponent as lasttPagePaginationIcon } from '../../images/pagination-right-lastpage-icon.svg'

import './TabContentInWork.css'

import arrowUpSmallIcon from '../../images/arrow-up-small-icon.svg'
import magnifierSmallIcon from '../../images/magnifier-small-icon.svg'
import { ReactComponent as datepickerIcon } from '../../images/datepicer-calendar-icon.svg'
import {  ReactComponent as rightArrowDatepickerIcon } from '../../images/right-arrow-datepicker-icon.svg'
import {  ReactComponent as leftArrowDatepickerIcon } from '../../images/left-arrow-datepicker-icon.svg'

import { generateTableData } from '../../utils/generateTableData'
import { useColumns } from './tableSettings'

const Pagination = ({ page, onPageChange, className }) => {
  const apiRef = useGridApiContext()
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <MuiPagination
      variant='outlined'
      shape='rounded'
      showFirstButton
      showLastButton
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1)
      }}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: prevPagePaginationIcon, next: nextPagePaginationIcon, first: firstPagePaginationIcon, last: lasttPagePaginationIcon }}
          {...item}
        />
      )}
    />
  )
}

const CustomPagination = (props) => (<GridPagination ActionsComponent={Pagination} {...props} />)

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
          slots={{
            pagination: CustomPagination,
          }}
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
          disableRowSelectionOnClick
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
          }
          rowHeight={66}
          sx={{
            border: 'none',
            '&.MuiDataGrid-root .datagrid-header-style': {
              color: '#B5BBCA',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: '600',
            },
            '&.MuiDataGrid-root .datagrid-cell-name-style': {
              color: '#4545AA',
            },
            '&.MuiDataGrid-root .MuiDataGrid-row': {
              color: '#727FA1',
              fontFamily: 'Montserrat',
              fontWeight: '600',
            },
            '&.MuiDataGrid-root .MuiDataGrid-cell': {
              border: 'none !important',
              whiteSpace: 'normal !important',
              wordWrap: 'break-word !important',
            },
            '&.MuiDataGrid-root .MuiDataGrid-footerContainer': {
              border: 'none !important',
              justifyContent: 'center',
              paddingTop: '40px',
            },
            '&.MuiDataGrid-root .MuiDataGrid-row:hover': {
              backgroundColor: 'inherit'
            },
            '&.MuiDataGrid-root .Mui-odd': {
              borderRadius: '6px',
              backgroundColor: '#FAF8FD',
            },
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
              outline: 'none !important',
            },
            '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within': {
              outline: 'none !important',
            },
            '&.MuiDataGrid-root .MuiTablePagination-toolbar': {
              padding: '0',
            },
            '&.MuiDataGrid-root .MuiTablePagination-selectLabel': {
              display: 'none',
            },
            '&.MuiDataGrid-root .MuiTablePagination-input': {
              display: 'none',
            },
            '&.MuiDataGrid-root .MuiTablePagination-displayedRows': {
              display: 'none',
            },
            '&.MuiDataGrid-root .MuiButtonBase-root': {
              color: '#B5BBCA',
              fontFamily: 'Montserrat',
              fontWeight: '500',
              height: '50px',
              minWidth: '50px',
              margin: '0 6px',
            },
          }}
      />
      </div>
    </div>
  )
}

export { TabContentInWork }