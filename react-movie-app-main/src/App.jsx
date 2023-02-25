import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import SingleMoviePage from './components/SingleMoviePage';
import ScrollButton from './components/TopBtn';
const App = () => {

  return (
 <BrowserRouter>
<ScrollButton/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movies/:id' element={<SingleMoviePage/>}/>
 </Routes>

 </BrowserRouter>
  )

}

export default App
