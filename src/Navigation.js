import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'
import UniversitiesPage from './pages/UniversitiesPage'
import ClientProvider from './context/ClientProvider'
import AdminPage from './pages/AdminPage'
import AdminAddPage from './pages/AdminAddPage'
import AdminProvider from './context/AdminProvider'
import AdminEditPage from './pages/AdminEditPage'

function Navigation() {
  return (
    <ClientProvider>
    <BrowserRouter>
    <AdminProvider>
    <Navbar />
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/universities" element={<UniversitiesPage/>}/>
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/admin/add" element={<AdminAddPage/>} />
            <Route path="/admin/edit/:id" element={<AdminEditPage/>}/> 
        </Routes>
        </AdminProvider>
    </BrowserRouter>
    </ClientProvider>
  )
}

export default Navigation