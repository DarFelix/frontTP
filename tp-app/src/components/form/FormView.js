import React, { useState, useEffect } from 'react'
import { InputText } from '../ui/InputText';
import { InputSelect } from '../ui/InputSelect';
import { cities, genres} from '../../helpers/Helpers'
import Swal from 'sweetalert2';
import { createUser, getUser,  } from '../../services/user'
import { getUsersInCompetition } from '../../services/score'
import { updateAttempts } from '../../services/employee'

export const FormView = () => {

  const [user, setUser] = useState(null);
  const [blockForm, setBlockForm] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [form, setForm] = useState(false);
  const { name, 
          numberDoc, 
          city, 
          genre, 
          birthday,
          employee
      } = formValues;


  const handleOnChange = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value,
    });
  }

  useEffect(()=>{
    handleGetUser(employee);
    confirmCompetition(employee);
   },[name]);


  const handleGetUser = async (id) => {

    await updateAttempts(id);
    try {
      const resp = await getUser(id);
      setUser(resp.data);
      console.log(resp.data);
      if (user === '' || user === undefined ) {
        setBlockForm(true);
        Swal
        .fire('Empleado no existe', `El id ingresado no registra en la base de datos de TP`, 'info')
        .then(() => setBlockForm(false));
        cleanFields();
      }else if (user !== null && user.employee !== undefined && user.employee.rol !== 'ASESOR'){
        setBlockForm(true);
        Swal
        .fire('Tu cargo no aplica', `No tienes el cargo de asesor requerido para concursar`, 'info')
        .then(() => setBlockForm(false));
        cleanFields();
      }
    } catch (error) {
      console.log(error);
    }
  }


  const confirmCompetition = async (id) => {
    try {
      const resp = await getUsersInCompetition(id);
      console.log(resp.data.length);
      if(resp.data.length > 0){
        setBlockForm(true);
        Swal
        .fire('¡Ya estás participando!', `No puedes incribirte a más de una actividad.` , 'info')
        .then(() => setBlockForm(false));
        cleanFields();
      }
    } catch (error) {
      console.log(error);
    }
  }

const handleSaveUser = async (e) => {
  e.preventDefault();
  const data = { name, numberDoc, city, genre, birthday, employee: {idEmployee: employee} };
        try {
          Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
          Swal.showLoading();
          console.log(user);
          await createUser(data);
          Swal.close();
          Swal
          .fire('Registro exitoso', `El usuario fue creado con éxito`, 'info');
          cleanFields();
          setForm(true);
        } catch (error) {
          Swal.close();
          console.log(error);
        }
}

const cleanFields = () => {
  setFormValues({
    name : '', 
    numberDoc :'', 
    city: '', 
    genre: '', 
    birthday: '',
    employee: ''
});
}

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
    { !form ?
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card card-custom card-custom-login">
          <div className="card-header card-header-login">
              <h2 className="card-title card-title-login">
               Inscríbite en los competencias que tenemos para ti
              </h2>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => handleSaveUser(e)}>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputText
                          label='ID empleado'
                          name='employee'
                          type='number'
                          required={true}
                          value={employee}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputText
                          label='Nombre completo'
                          name='name'
                          type='text'
                          required={true} 
                          value={name}
                          disabled={blockForm ? true : false}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputText
                          label='Cédula'
                          name='numberDoc'
                          type='number'
                          required={true} 
                          value={numberDoc}
                          disabled={blockForm ? true : false}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputSelect
                          label='Ciudad'
                          name='city'
                          required={true}
                          items={cities}
                          value={city}
                          disabled={blockForm ? true : false}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputSelect
                          label='Género'
                          name='genre'
                          required={true}
                          items={genres}
                          value={genre}
                          disabled={blockForm ? true : false}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputText
                          label='Fecha de nacimiento'
                          name='birthday'
                          type='date'
                          required={true} 
                          value={birthday}
                          disabled={blockForm ? true : false}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col">
                      <button className="btn btn-danger" onClick={handleSaveUser}>Registrarme</button>
                  </div>
                  <div className="col">
                      <button className="btn btn-secondary" onClick={cleanFields}>Limpiar</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
    :
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card card-custom card-custom-login">
        <div className="card-header card-header-login">
              <h2 className="card-title card-title-login">
               Escoge la competencia que más te guste
              </h2>
          </div>
          <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputSelect
                          label='Género'
                          name='genre'
                          required={true}
                          items={genres}
                          value={genre}
                          disabled={blockForm ? true : false}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    }
  </div>
  )
}
