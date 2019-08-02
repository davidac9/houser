import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {HashRouter} from 'react-router-dom'
import routes from './routes'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        {/* <Link className='links' to='/'>Dashboard</Link> */}
        {/* <Link className='links' to='/wizard'>About</Link> */}
        {routes}
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
