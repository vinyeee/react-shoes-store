import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button `
    background : ${props => props.backgroundColor};
    color : ${props => props.backgroundColor == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

function Detail(props){

    let {id} = useParams();
    let findByIdShoes = props.shoes.find((shoe) => {
        return shoe.id == id;
     }) 
     // url 파라미터만 단독으로 썼을땐 자료 순서가 변경되면 상세페이지도 고장나버림 
     // url 파라미터로 받은 id 와 props의 shoes의 고유id 가 같은 객체를 반환환 
    
     return(
        <div className="container">
            <YellowBtn backgroundColor ="blue">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src={findByIdShoes.imgUrl} width="100%" />
                </div>
            <div className="col-md-6">
                <h4 className="pt-5">{findByIdShoes.title}</h4>
                <p>{findByIdShoes.content}</p>
                <p>{findByIdShoes.price}원      </p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
        </div>
    );
}

export { Detail } 