const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const generateTableData = (amount) => {
  const type = ['Начало нового бюджетного цикла', 'Корректировка', 'Уточнение']
  const name = ['Бюджетный процесс на подачу БЗ на плановый период на 2024-2026 годы', 'Бюджетный процесс на корректировку на 2023 год', 'Бюджетный процесс на корректировку на 2022 год (ЦГО)']
  const version = ['1.1.1', '1.1.2', '1.1.3', '1.1.9']
  const owner = ['Иванов Иван Иванович', 'Петров Петр Петрович', 'Алибеков Алибек Алибекович', 'Викторов Виктор Викторович']
  const status = [true, false]
  const date = [new Date(), new Date(new Date().getTime() + (24 * 60 * 60 * 1000)), new Date(new Date().getTime() + (48 * 60 * 60 * 1000))]
  const statusSI = [true, false]
  const statusGTC = [true, false]

  const arr = []

  for (let i=0; i<amount; i++) {
    arr.push(
      {
        id: i+1,
        type: getRandomElement(type),
        name: getRandomElement(name),
        version: getRandomElement(version),
        owner: getRandomElement(owner),
        status: getRandomElement(status),
        date: getRandomElement(date),
        statusSI: getRandomElement(statusSI),
        statusGTC: getRandomElement(statusGTC),
      }
    )
  }

  return arr
}

export { generateTableData }