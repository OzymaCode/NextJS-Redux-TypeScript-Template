import { createSlice, current } from '@reduxjs/toolkit'

export type initialState = {
  count: number
}
 
const slice = createSlice({
  name: 'main',
  initialState: { 
    count: 0, 
  },
  reducers: {
    add: (state) => {
      state.count = state.count + 1
    },
    subtract: (state) => {
      state.count = state.count - 1
    }, 
  },
})

export default slice.reducer

export const { add, subtract} = slice.actions
