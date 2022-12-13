import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '../components/ui/Header';
import { WaitView } from '../components/wait/WaitView'
import { AttemptsView } from '../components/attempts/AttemptsView'


export const WaitDashboardRoutes = () => {

  return (
      <>
        <Header />
        <Routes>
          <Route path="espera" element={ <WaitView />}/>
          <Route path="intentos" element={ <AttemptsView /> } />

          <Route path='*' element={ <Navigate to='/espera' /> } />
        </Routes>
      </>
  )
}