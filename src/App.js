import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useState } from 'react'
import { shoes_data } from './data'
import { ShoeItem } from './components'
import { Routes, Route, Link } from 'react-router-dom'
function App() {

  let [shoes] = useState(shoes_data);
  
  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path = "/" element={
          <>
            <div className='main-bg' style = {{backgroundImage : `url(${process.env.PUBLIC_URL + '/img/bg.png'})`}}></div>
            <div className="container">
              <div className="row">
                {shoes.map((shoe) => {
                  return (
                    <ShoeItem 
                      title = {shoe.title}
                      price = {shoe.price}
                      imgUrl = {shoe.imgUrl}
                    />
                  );
                })}
              </div>
            </div> 
          </>
        } />
        <Route path = "/detail" element = {
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
