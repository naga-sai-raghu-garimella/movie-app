import React from 'react'
import Content from './Content'
import Home from './Home'
import Header from './Header'
import NowShowing from './Pages/NowShowing'
import Popular from './Pages/Popular'
import TopRated from './Pages/TopRated'
import UpComming from './Pages/UpComming'
import MovieDetail from './Movies/MovieDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-t from-black via-gray-700 to-gray-800">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Content/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/nowPlaying" element={<NowShowing/>}></Route>
      <Route path="/popular" element={<Popular/>}></Route>
      <Route path="/topRated" element={<TopRated/>}></Route>
      <Route path="/upcoming" element={<UpComming/>}></Route>
      <Route exact path = "/detail/:id" element={<MovieDetail/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
   </div>   

  )
}

export default Routing;