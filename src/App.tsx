import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<><Home /><Footer/></>} />
        </Routes>
      </BrowserRouter>
    );
  }

}

export default App;
