import React from 'react'

import { TableComponentYes, TableComponentNo } from '../index'

import { convertDateToHumanView } from '../../utils/convertDateToHumanView'

const useColumns = () => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 20,
      headerClassName: 'datagrid-header-style'
    },
    {
      field: 'type',
      headerName: 'Тип',
      width: 160,
      headerClassName: 'datagrid-header-style'
    },
    {
      field: 'name',
      headerName: 'Наименование',
      width: 300,
      headerClassName: 'datagrid-header-style',
      cellClassName: 'datagrid-cell-name-style'
    },
    {
      field: 'version',
      headerName: 'Версия',
      width: 90,
      headerClassName: 'datagrid-header-style'
    },
    {
      field: 'owner',
      headerName: 'Владелец',
      width: 160,
      headerClassName: 'datagrid-header-style'
    },
    {
      field: 'status',
      headerName: 'Статус',
      flex: 1,
      renderCell: (params) => params.value ? (<TableComponentYes />) : (<TableComponentNo />),
      type: 'boolean',
      headerClassName: 'datagrid-header-style'
    },
    {
      type: 'date',
      field: 'date',
      headerName: 'Дата взятия в работу в УО',
      width: 200,
      renderCell: (params) => convertDateToHumanView(params.value),
      headerClassName: 'datagrid-header-style'
    },
    {
      field: 'statusSI',
      headerName: 'Cтатус СИ',
      flex: 1,
      renderCell: (params) => params.value ? (<TableComponentYes />) : (<TableComponentNo />),
      type: 'boolean',
      headerClassName: 'datagrid-header-style'
    },
    {
      field: 'statusGTC',
      headerName: 'Статус ГТС',
      flex: 1,
      renderCell: (params) => params.value ? (<TableComponentYes />) : (<TableComponentNo />),
      type: 'boolean',
      headerClassName: 'datagrid-header-style'
    },
  ]

  return {
      columns,
  }
}

export { useColumns }