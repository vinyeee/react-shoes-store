import './App.css';
import { useState } from 'react'
import { shoes_data } from './data'
import { ShoeItem } from './components'
import { Routes, Route, Link } from 'react-router-dom'
import { CustomNavbar, DetailPage } from './components';
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
          <DetailPage/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
