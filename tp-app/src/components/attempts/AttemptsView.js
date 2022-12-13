import React, { useState, useEffect } from 'react'
import { getUsers } from '../../services/user'
import { Footer } from '../../components/ui/Footer'

export const AttemptsView = () => {

  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    try {
      
      const res = await getUsers();
      setUsers(res.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    listUsers();
   },[]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card card-custom card-custom-attempts">
                <div className="card-header card-header-login">
                    <h2 className="card-title-table card-title-login">
                    Estadísticas de intentos de inscripción
                    </h2>
                </div>
                <table className="table table-modal">
                    <thead className='head-table'>
                      <tr className='tr-ancho'>
                        <th><div>#</div></th>
                        <th>Nombre</th>
                        <th>Cédula</th>
                        <th>Ciudad</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Intentos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        users.map(({ idUser, name, numberDoc, city, birthday, employee }, i) => {
                                    return (
                                      <tr key={idUser}>
                                          <td>{i + 1}</td>
                                          <td>{name}</td>
                                          <td>{numberDoc}</td>
                                          <td>{city}</td>
                                          <td>{birthday}</td>
                                          <td>{employee.rol}</td>
                                          <td>{employee.attempts}</td>
                                      </tr>
                                  )
                                })
                      }
                    </tbody>
              </table>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}
