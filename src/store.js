import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim' , age : 20 },
    reducers: {
        // state 수정함수
        changeName(state) { // 기존 state
            // array/object의 경우 직접 수정해도 state 변경됨
          state.name = 'park'  
        },
        changeAge(state, action){
          state.age += action.payload
        }
    }

})

export let { changeName, changeAge } = user.actions


let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ], 
    reducers: {
      addCount(state , action){
        state[action.payload].count++
      }
    }
})
 
export let { addCount } = cart.actions
export default configureStore({
  reducer: { 
    user: user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})