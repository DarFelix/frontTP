import React from 'react';
import { Footer } from '../../components/ui/Footer'

export const WaitView = () => {


  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row justify-content-center alert-center">
        <div className="col-lg-9">
          <div className="card card-custom card-custom-attempts">
                <div className="card-header card-header-login">
                    <h2 className="card-title-table card-title-login">
                    Las inscripciones cerraron, espera el inicio del evento para ver las calificaciones de los participantes
                    </h2>
                </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
