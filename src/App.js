import './App.css';
import { useState } from 'react'
import { shoes_data } from './data'
import { ShoeItem } from './components'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { CustomNavbar } from './components';
import { Detail } from './routes'
function App() {

  let [shoes] = useState(shoes_data);
  

  return (
    <div className="App">

      <CustomNavbar/>

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
          <Detail/>
        }/>
        <Route path = "*" element = {<div>Not Found 404</div>}/>
      </Routes>
    </div>
  );
}

export default App;
