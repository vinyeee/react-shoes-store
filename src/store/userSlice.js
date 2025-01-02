import { createSlice } from '@reduxjs/toolkit'

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

export let { changeName,  changeAge } = user.actions

export default user
