import './App.css';
import { createContext, useEffect, useState } from 'react'
import { shoes_data } from './data'
import { ShoeItem } from './components'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { CustomNavbar } from './components';
import { Detail , Cart} from './routes'
import axios from 'axios';

export let DetailContext = createContext();

function App() {

  let [shoes, setShose] = useState(shoes_data);
  let [stock, setStock] = useState([10,11,12]);

  // 최근 본 상품 담기
  /** 1. 누군가 Detail 페이지에 접속하면 
   *  2. 그 페이지의 상품id를 가져와서
   *  3. localStorage에  잠시 보관  */
  
  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([]));
  })
  return (
    <div className="App">

      <CustomNavbar/>

      <Routes>
        <Route path = "/" element={
          <>
            <div className='main-bg' style = {{backgroundImage : `url(${process.env.PUBLIC_URL + '/img/bg.png'})`}}></div>
            <div className="container">
              <div className="row">
                {shoes.map((shoe,i) => {
                  return (
                    <ShoeItem 
                      shoe = {shoe}
                      i = {i}
                      key = {i}
                    />
                  );
                })}
              </div>
              <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((response)=>{
                  //console.log(response.data);
                  let newShoes = [...shoes, ...response.data];
                  setShose(newShoes);
                })
                .catch((error)=>{
                  console.error('데이터 로딩 실패',error);
                })
              }}>더보기</button>
            </div> 
          </>
        } />
        <Route path = "/detail/:id" element = {
          <DetailContext.Provider value = {{stock, shoes}}>
            <Detail shoes = {shoes}/>
          </DetailContext.Provider>          
          }/>
        <Route path = "/cart" element = {<Cart/>}>

        </Route>
        {/* <Route path = "/event" element = {<Event/>}>
          <Route path = "one" element = {<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path = "two" element = {<p>생일 기념 쿠폰 받기기</p>}/>          
        </Route> */}
        {/* <Route path = "*" element = {<div>Not Found 404 </div>}/> */}
      </Routes>
    </div>
  );
}

export default App;


function Event(){
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet/>
    </div>
  )
}