const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const checkResponse = (res) => res.ok? res.json() : Promise.reject(res)

const getTestData = () => fetch(BASE_URL, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(checkResponse)

export { getTestData }