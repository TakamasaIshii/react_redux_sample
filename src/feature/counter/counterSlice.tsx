import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
    value: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: 0
  }

  
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    incrementAsync2ByAmount: (state, action: PayloadAction<number>) => {
        setTimeout(() => {
            console.log("ccc",action)
            incrementByAmount(action.payload)
        }, 1000)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,incrementAsync2ByAmount } = counterSlice.actions
export const incrementAsync = (amount:number, dispatch:AppDispatch):void => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
}
export const selectCount = (state:RootState) => state.counter.value
export default counterSlice.reducer