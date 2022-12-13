import React, { useState, useEffect } from 'react'
import { getTops } from '../../services/score'
import { Footer } from '../../components/ui/Footer'

export const TopView = () => {

  const [scoresA, setScoresA] = useState([]);
  const [scoresB, setScoresB] = useState([]);
  const [scoresC, setScoresC] = useState([]);

  const listA = async () => {
    try {
      const res = await getTops(1);
      setScoresA(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listA();
  }, []);

  const listB = async () => {
    try {
      const res = await getTops(2);
      setScoresB(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listB();
  }, []);

  const listC = async () => {
    try {
      const res = await getTops(3);
      setScoresC(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listC();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="card-header card-header-login">
        <h1 className="card-title-table card-title-login">
          Escalafón por actividad
        </h1>
      </div>
      <div className="row ">
        <div className="col-lg-12">
        <h3 className="card-title-table card-title-login">
          Bogotá
        </h3>
        </div>
      </div>
      <div className="row justify-content-center alert-center heigh-container">
        <div className="col-lg-4">
          <div className="card card-custom card-custom-attempts">
            <div className="card-header card-header-login">
              <h3 className="card-title-table card-title-login">
                Ejercicios mentales
              </h3>
            </div>

            {
              scoresA.map(({ idScore, score, user }, i) => {
                return (
                  <div className={i < 1 ? "alert alert-success word-item" : i < 2 ? "alert alert-danger word-item" : i < 3 ? "alert alert-primary word-item" : "alert alert-secondary word-item"} role="alert" key={idScore}>

                    <h5>{i + 1}.</h5>
                    <h5>{user.name}</h5>
                    <h5>{score}</h5>

                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-custom card-custom-attempts">
            <div className="card-header card-header-login">
              <h3 className="card-title-table card-title-login">
                Actividades físicas
              </h3>
            </div>
            {
              scoresB.map(({ idScore, score, user }, i) => {
                return (
                  <div className={i < 1 ? "alert alert-success word-item" : i < 2 ? "alert alert-danger word-item" : i < 3 ? "alert alert-primary word-item" : "alert alert-secondary word-item"} role="alert" key={idScore}>

                    <h5>{i + 1}.</h5>
                    <h5>{user.name}</h5>
                    <h5>{score}</h5>

                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-custom card-custom-attempts">
            <div className="card-header card-header-login">
              <h3 className="card-title-table card-title-login">
                Actividades grupales
              </h3>
            </div>
            {
              scoresC.map(({ idScore, score, user }, i) => {
                return (
                  <div className={i < 1 ? "alert alert-success word-item" : i < 2 ? "alert alert-danger word-item" : i < 3 ? "alert alert-primary word-item" : "alert alert-secondary word-item"} role="alert" key={idScore}>

                    <h5>{i + 1}.</h5>
                    <h5>{user.name}</h5>
                    <h5>{score}</h5>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-12">
        <h3 className="card-title-table card-title-login">
          Medellín
        </h3>
        </div>
      </div>
      <div className="row justify-content-center alert-center heigh-container">
        <div className="col-lg-4">
          <div className="card card-custom card-custom-attempts">
            <div className="card-header card-header-login">
              <h3 className="card-title-table card-title-login">
                Ejercicios mentales
              </h3>
            </div>

            {
              scoresA.map(({ idScore, score, user }, i) => {
                return (
                  <div className={i < 1 ? "alert alert-success word-item" : i < 2 ? "alert alert-danger word-item" : i < 3 ? "alert alert-primary word-item" : "alert alert-secondary word-item"} role="alert" key={idScore}>

                    <h5>{i + 1}.</h5>
                    <h5>{user.name}</h5>
                    <h5>{score}</h5>

                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-custom card-custom-attempts">
            <div className="card-header card-header-login">
              <h3 className="card-title-table card-title-login">
                Actividades físicas
              </h3>
            </div>
            {
              scoresB.map(({ idScore, score, user }, i) => {
                return (
                  <div className={i < 1 ? "alert alert-success word-item" : i < 2 ? "alert alert-danger word-item" : i < 3 ? "alert alert-primary word-item" : "alert alert-secondary word-item"} role="alert" key={idScore}>

                    <h5>{i + 1}.</h5>
                    <h5>{user.name}</h5>
                    <h5>{score}</h5>

                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-custom card-custom-attempts">
            <div className="card-header card-header-login">
              <h3 className="card-title-table card-title-login">
                Actividades grupales
              </h3>
            </div>
            {
              scoresC.map(({ idScore, score, user }, i) => {
                return (
                  <div className={i < 1 ? "alert alert-success word-item" : i < 2 ? "alert alert-danger word-item" : i < 3 ? "alert alert-primary word-item" : "alert alert-secondary word-item"} role="alert" key={idScore}>

                    <h5>{i + 1}.</h5>
                    <h5>{user.name}</h5>
                    <h5>{score}</h5>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}
