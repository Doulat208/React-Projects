import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Home from './components/Home'
import HeaderTask from './components/HeaderTask';
import Choice from './components/Choice';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Fruite from './components/Fruite';
import Table from './components/Table';
import Query from './components/Query';
import Error from './components/Error';
import UseEffectInfo from './components/UseEffectInfo';

const App = () => {
  return (
    <div>

      <HeaderTask/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='Choice' element={<Choice/>} >
            <Route path='Fruite' element={<Fruite/>} />
        </Route>
        <Route path='/table/:value' element={<Table />}/>
        <Route path='/table' element={<Table num = {4}/>}/>
        <Route path='/query' element={<Query />}/>
        <Route path='/useeffect' element={<UseEffectInfo />}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
