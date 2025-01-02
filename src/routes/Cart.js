import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName , changeAge } from './../store/userSlice'
import { addCount } from './../store.js';
function Cart(){

    
    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()
    return(
        

        <div>
            <h6>{state.user.name}의 장바구니 {state.user.age}</h6>
            <button onClick={() => { dispatch(changeAge(90))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((item, i) => {
                            return (
                                <tr key = {i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td>
                                        <button onClick = {() => {
                                            dispatch(addCount(state.cart[i].id))                                            
                                        }}>+</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>     
    );
}

export { Cart }
