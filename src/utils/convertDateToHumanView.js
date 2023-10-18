const locale = 'ru'

const dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

const dateFormat = new Intl.DateTimeFormat(locale, dateOptions)

const convertDateToHumanView = (date) => (date === undefined || date === null ? '' : dateFormat.format(date))

export { convertDateToHumanView }
