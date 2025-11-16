import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Status from './pages/Status'
import Documents from './pages/Documents'
import Media from './pages/Media'
import Actions from './pages/Actions'
import Contacts from './pages/Contacts'
import Submit from './pages/Submit'
import Alerts from './pages/Alerts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/status" element={<Status />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/media" element={<Media />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
