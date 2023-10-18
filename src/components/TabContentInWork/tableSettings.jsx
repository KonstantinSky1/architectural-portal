import React from 'react'

import { convertDateToHumanView } from '../../utils/convertDateToHumanView'

const useColumns = () => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Тип',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Наименование',
      flex: 1,
    },
    {
      field: 'version',
      headerName: 'Версия',
      flex: 1,
    },
    {
      field: 'owner',
      headerName: 'Владелец',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Статус',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Дата взятия в работу в УО',
      flex: 1,
      renderCell: (params) => convertDateToHumanView(params.value)
    },
    {
      field: 'statusSI',
      headerName: 'Cтатус СИ',
      flex: 1,
    },
    {
      field: 'statusGTC',
      headerName: 'Статус ГТС',
      flex: 1,
    },
  ]

  return {
      columns,
  }
}

export { useColumns }