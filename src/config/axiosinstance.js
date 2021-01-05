import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fancy-todo-h8.herokuapp.com'
})

export default instance