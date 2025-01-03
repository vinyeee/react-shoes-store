import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'




let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

// 삭제도 만들어보기 
let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ], 
    reducers: {
      addCount(state, action){
        let i = state.findIndex((item) => { return item.id === action.payload})
        state[i].count += 1;
      }, 
      addItem(state, action){
        state.push(action.payload)
      }      
    }
})
 
export let { addCount , addItem } = cart.actions


export default configureStore({
  reducer: { 
    user: user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})