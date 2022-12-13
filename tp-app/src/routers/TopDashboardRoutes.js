import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '../components/ui/Header';
import { TopView } from '../components/top/TopView';
import { AttemptsView } from '../components/attempts/AttemptsView'


export const TopDashboardRoutes = () => {
  return (
      <>
        <Header />
        <Routes>
          <Route path="top" element={ <TopView /> } />
          <Route path="intentos" element={ <AttemptsView /> } />

          <Route path='*' element={ <Navigate to='/top' /> } />
        </Routes>
      </>
  )
}