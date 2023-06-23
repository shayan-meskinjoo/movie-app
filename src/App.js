import React from 'react'
import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='movie/:imdbID' element={<MovieDetail />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
