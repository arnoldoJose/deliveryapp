import React, {Fragment} from 'react'
import '../css/App.css';
import '../css/Shadows.css';
import Formularios from '../Components/Formularios';

const Register = () => {

  let contador = 1;

  let activame = () => {
    if (contador) {
      document.querySelector(".pb").classList.remove("mago");
      document.querySelector(".pb").classList.add("activada")
      oculatarElementRegister();
      contador = 0;
    }
  }

  let izactivame = () => {
    document.querySelector(".pb").classList.remove("activada");
    document.querySelector(".pb").classList.add("mago");
    ocultarElementLogin();
    contador = 1;
  }

  let oculatarElementRegister = () => {
    document.querySelector(".dcbtn").style.display = "none"
    document.querySelector(".izbtn").style.display = "block"
    document.querySelector(".txt-registro").style.display = "none"
    document.querySelector(".txt-sesion").style.display = "block"
  }

  let ocultarElementLogin = () => {
    document.querySelector(".izbtn").style.display = "none"
    document.querySelector(".dcbtn").style.display = "block"
    document.querySelector(".txt-sesion").style.display = "none";
    document.querySelector(".txt-registro").style.display = "block"
  }

  return (

    <Fragment>
      <div className="card col-12 col-sm-12 col-md-9 col-lg-7 mx-auto p-1 m-5 mt-5 rg">
        <div className="pb mago">
      
        <div className="container-info container mt-5">
          <h5 className="text-center txt-font text-white txt-registro mr-5 ">
            <p>No tienes una cuenta? registrate</p>
          </h5>
            <h5 className="text-center txt-font text-white txt-sesion mr-5">
              <p>Ya Tienes Una Cuenta? Inicia Sesion</p>
            </h5>
        </div>

        <div className="container-btn container mt-5 ">
          <button className="btn btn-light izbtn" onClick={izactivame}>Iniciar Sesion</button>
          
          <button className="btn btn-light ml-2 dcbtn" onClick={activame}>Registrate</button>
        </div>

        <div className="container container-dev mt-5">
          <div className="text-white txt-des">
            <p>
              crea una cuenta con nostros para 
              acceder a diferentes servicos que 
              te ofrecemos
            </p>
          </div>
        </div>
        </div>

        <Formularios/>
        
        <div className="card-footer">
        </div>
      </div>
      
    </Fragment>
  )
}

export default Register


/* <div className="card-title text-center"><h1>Registrate</h1></div> */