import { useParams } from "react-router-dom";
import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { DetailContext } from './../App.js';

let YellowBtn = styled.button `
    background : ${props => props.backgroundcolor};
    color : ${props => props.backgroundcolor == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

function Detail(props){

    let {id} = useParams();
    let findByIdShoes = props.shoes.find((shoe) => {
        return shoe.id == id;
     }) 
     
    let [alertEvent , setAlertEvent ] = useState(true);
    let [tab , setTab] = useState(0);

    let {stock} = useContext(DetailContext);


    // mount, update 될 때 실행
    useEffect(() => {
        let a =setTimeout(() => {setAlertEvent(!alertEvent)} , 2000)
        return () => {
            //useEffect 실행 전에 실행됨 
            clearTimeout(a);
        }
    },[]);

    
    
     
     // url 파라미터만 단독으로 썼을땐 자료 순서가 변경되면 상세페이지도 고장나버림 
     // url 파라미터로 받은 id 와 props의 shoes의 고유id 가 같은 객체를 반환환 
     return(
        <div className="container">
            { 
            alertEvent == true ? <div className = "alert alert-warning">2초이내 구매 시 할인</div> : null 
            }

            <YellowBtn backgroundColor ="blue">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${findByIdShoes.id + 1}.jpg`} width="100%" />
                </div>
            <div className="col-md-6">
                <h4 className="pt-5">{findByIdShoes.title}</h4>
                <p>{findByIdShoes.content}</p>
                <p>{findByIdShoes.price}원      </p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
            
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick = {() => {setTab(1)}} >버튼1

                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick = {() => {setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab}/>

        </div>
        
    );
    
}


function TabContent({tab, shoes}){
    // if (tab == 0){
    //     return <div>내용0</div>        
    // }else if (tab == 1){
    //     return <div>내용1</div>
    // }else if (tab == 2){
    //     return <div>내용2</div>
    // }

    
    let [fade, setFade] = useState('')
    let {stock} = useContext(DetailContext); 
    useEffect(() => {
        let a = setTimeout(() => {setFade('end')}, 10)
        return () => {
            setFade('')
            clearTimeout(a)
        }
    },[tab])

    return (<div className = {`start ${fade}`}>
        { [<div>내용0{stock[1]}</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>);
}
export { Detail } 