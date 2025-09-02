import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormHandling from './components/FormHandling'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Error from './components/Error';
import Table from './components/Table';
import Counter from './components/Counter';
import Lang from './components/Lang';
import JavaCom from './components/JavaCom';
import PythonCom from './components/PythonCom';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formhandling" element={<FormHandling />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<Table />} />
        <Route path="Lang" element={<Lang />}>
          <Route path='Java' element={<JavaCom />} />
          <Route path='Python' element={<PythonCom />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
