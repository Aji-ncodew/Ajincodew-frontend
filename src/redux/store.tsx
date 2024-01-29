import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'

export default configureStore({
  reducer: {blogReducer:blogReducer}
})