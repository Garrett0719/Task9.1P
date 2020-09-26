import React from 'react';
import Navbar from './component/Navbar'
import MainImage from './component/MainImage'
import CardList from './component/CardList';
import Footerbar from './component/Footerbar'
import './css/Home.css'

function App() {
  return(
    <div className ='home'>
    <div className ='navbar'>
      <Navbar/>
      </div>
      <div className ='image'>
        <MainImage />
        </div>
        <div className ='Requesters'>
          <CardList/>
          </div>
          <div className='footer'>
            <Footerbar />
            </div>
            </div>   
  );
}

export default App;
