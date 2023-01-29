import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Chicken from '../Pages/Chicken';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chicken" element={<Chicken />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoute
