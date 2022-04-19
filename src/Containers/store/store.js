import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../../Components/counter/counterSlice'

export default configureStore({
  reducer: {
    counter:counterSlice
  },
})