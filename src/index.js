import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Magazine from './Magazine'
import Podcasts from './Podcasts'
import Events from './Events'
import Esports from './Esports'
import Models from './Models'
import NotFound from './NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/Podcasts" element={<Podcasts />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Esports" element={<Esports />} />
        <Route path="/Models" element={<Models />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
