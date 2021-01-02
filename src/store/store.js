import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from '../config/axiosinstance'

const initState = {
  todos: [],
  todo: {}
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case 'FETCH_TODOS':
      fetchTodos(); break
    case 'ADD_TODOS':
      createTodo(); break
    case 'GET_TODO':
      getTodo(); break;
    case 'SET_TODO' : 
      return {
        ...state,
        todo: action.payload
      }
    default: break;
  }
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

function fetchTodos() {
  axios({
    url:'/todos',
    method: 'GET',
    headers: { access_token: localStorage.getItem('access_token')}
  })
    .then(({ data }) => {
      store.dispatch({ type: 'SET_TODOS', payload: data.data })
    })
    .catch(err => console.log(err))
}

const createTodo = (payload) => {
  axios({
    url: '/todos',
    method: 'POST',
    headers: { access_token: localStorage.getItem('access_token')},
    data: payload
  })
    .then(_ => { 
      store.dispatch({ type: 'FETCH_TODOS' })
    })
    .catch(err => console.log(err))
}

const getTodo = (id) => {
  axios({
    url: '/todos/' + id,
    method: 'GET',
    headers: {access_token: localStorage.getItem('access_token')}
  })
    .then(({ data }) => {
      store.dispatch({ type: 'SET_TODO', payload: data.data})
    })
    .catch(err => console.log(err))
}

export default store