import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '../components/ui/Header';
import { FormView } from '../components/form/FormView';
import { AttemptsView } from '../components/attempts/AttemptsView'

export const InitDashboardRoutes = () => {
  return (
      <>
        <Header />
        <Routes>
          <Route path="inscripciones" element={ <FormView />}/>
          <Route path="intentos" element={ <AttemptsView /> } />

          <Route path='*' element={ <Navigate to='/inscripciones' /> } />
        </Routes>
      </>
  )
}