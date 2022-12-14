import React, { useState, useEffect } from 'react'
import { InputText } from '../ui/InputText';
import { InputSelect } from '../ui/InputSelect';
import { cities, genres, competitions} from '../../helpers/Helpers'
import Swal from 'sweetalert2';
import { createUser, getUserByIdEmploy} from '../../services/user'
import { getUsersInCompetition, createScore } from '../../services/score'
import { getEmployee, updateAttempts } from '../../services/employee'
import { Footer } from '../../components/ui/Footer'

export const FormView = () => {

  const [employ, setEmploy] = useState([]);
  const [userEmploy, setUserEmploy] = useState([]);
  const [blockForm, setBlockForm] = useState(false);
  const [formValues, setFormValues] = useState({});
  const { name, numberDoc, city,  genre, birthday, employee} = formValues;
  const [form, setForm] = useState(false);
  const [ formScore, setFormScore] = useState({});
  const { score, user, competition} = formScore;

  useEffect(()=>{
    if(employee !== undefined){
      handleGetEmploy(employee);
    }
   },[name]);

   useEffect(()=>{
     if ( employ !== null && employ.length !== 0 && employ.rol !== 'ASESOR' ){
      updateAttemptsUser(employ.idEmployee);
      Swal
      .fire('Tu cargo no aplica', `No tienes el cargo de asesor requerido para concursar`, 'info');
      cleanFields();
    }
   },[employ]);

   useEffect(()=>{
    if ( employ === '' ) {
      Swal
      .fire('Empleado no existe', `El id ingresado no registra en la base de datos de TP`, 'info')
      cleanFields();
    }
   },[employ]);

   useEffect(()=>{
    if(employ !== null && employ.idEmployee !== undefined){
    confirmCompetition(employ.idEmployee);
    }
   },[employ]);
   

   const handleOnChange = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value,
    });
    setFormScore({
      ...formScore,
      [target.name]: target.value,
  });
  }

  const handleGetEmploy = async (id) => {
    try {
      if(id !== ''){
        const resp = await getEmployee(id);
        setEmploy(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateAttemptsUser = async (id) => {
    try {
      if(id !== undefined){
      await updateAttempts(id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const confirmCompetition = async (id) => {
    try {
      const resp = await getUsersInCompetition(id);
      if(resp.data.length > 0){
        setBlockForm(true);
        updateAttemptsUser(employ.idEmployee);
        Swal
        .fire('??Ya est??s participando!', `No puedes incribirte a m??s de una actividad.` , 'info')
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
          await createUser(data);
          Swal.close();
          Swal
          .fire('Registro exitoso', `El usuario fue creado con ??xito`, 'info');
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

const cleanActivity = () =>{
  setFormScore({
    score : '', 
    user :'', 
    competition: ''
});
}

useEffect(()=>{
  if(employ !== undefined && employ !== '' && employ.length !== 0 && form === true){
    handleGetUser(employ.idEmployee);
  }
 },[form]);

const handleGetUser = async (id) => {
  try {
    if(id !== ''){
      const resp = await getUserByIdEmploy(id);
      setUserEmploy(resp.data);
    }
  } catch (error) {
    console.log(error);
  }
}

const handleSaveRegistry = async (e) => {
  e.preventDefault();
  const data = { score : 0, user: { idUser: userEmploy.idUser}, competition: {idCompetition: competition} };
  console.log(data);
       try {
        
          Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
          Swal.showLoading();
          await createScore(data);
          Swal.close();
          Swal
          .fire('Registro exitoso', `Te has inscrito, espera la fecha del evento`, 'info')
          .then(() => setForm(false));
          cleanFields();
          cleanActivity();
          
      } catch (error) {
        Swal.close();
        console.log(error);
      }
} 

const cancelInscription = () => {
  try {
    Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
    Swal.showLoading();
    Swal.close();
    updateAttemptsUser(employ.idEmployee);
    Swal
    .fire('Inscripci??n cancelada', `Puedes volver a inscribirte despu??s`, 'info')
    .then(() => setForm(false));
    cleanFields();
    cleanActivity();
  } catch (error) {
    Swal.close();
    console.log(error);
  }

}

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
    { !form ?
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card card-custom card-custom-login">
          <div className="card-header card-header-login">
              <h2 className="align-tx card-title-login">
               Inscr??bite en las actividades de integraci??n que tenemos para ti
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
                          label='C??dula'
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
                          label='G??nero'
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
                  <div className="col-6 align-btn">
                      <button type = 'submit' className="btn btn-danger">Registrarme</button>
                  </div>
                  <div className="col-6 align-btn">
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
               Escoge la competencia que m??s te guste
              </h2>
          </div>
          <form onSubmit={(e) => handleSaveRegistry(e)}>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <InputSelect
                          label=''
                          name='competition'
                          required={true}
                          items={competitions}
                          value={competition}
                          handleOnChange={handleOnChange}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col">
                      <button type = 'submit' className="btn btn-danger">Guardar</button>
                  </div>
                  <div className="col">
                      <button className="btn btn-secondary" onClick={()=>cancelInscription()}>Cancelar y salir</button>
                  </div>
              </div>
            </form>
        </div>
      </div>
    </div>
    }
    <Footer/>
  </div>
  )
}
