import React,{useState,useContext} from 'react'
import '../css/Shadows.css';

import noVisible from '../svg/novisible.svg';
import visible from '../svg/visibilidad.svg';
import { color, error, colorLogin, errorLogin } from '../Components/ControlError';

import Swal from 'sweetalert2';
import clienteAxios from '../Config/axios';
import { withRouter} from "react-router-dom";

import { CRMContext} from '../Middleware/Auth';
import Axios from 'axios';
import { CRMENVProduction } from "../Middleware/EnviPorduction"
const Formularios = ({history}) => {

  const {  guardarAuth} = useContext(CRMContext);
  let { envidev } = useContext(CRMENVProduction);
 
  const [userLg, guardarUserLg] = useState("");
  const [userRg,  guardarUserRg] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    
    if(!userLg.email || !userLg.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llena Todos Los Campos',
      });
      return;
    }
        
    try {
      let data = await Axios.post(`${envidev}/user-login`, userLg);
      guardarAuth({token: data.data.token,auth: true,user: data.data.user});
      
      localStorage.setItem("token", data.data.token);
      
      let { rol } = data.data.user;
      
      if(rol === "ADMIN_ROLE"){
        history.push("/add-data-article");
      }else{
        history.push("/deliveryapp");
      }
    
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`,
      });
    }
  }

  let handelChange = (e) => {
    let { name, value } = e.target;

    guardarUserLg({
      ...userLg,
      [name]: value
    });
  }


  let handelSubmitRegister = async(e) => {
    e.preventDefault();
    await clienteAxios.post("/user-register",userRg);
    history.push("/")
  }

  let handelRegister = (e) => {
    let {name,value} = e.target;

    guardarUserRg({
      ...userRg,
      [name] : value
    });
  }

  let removeA = () => {
    let ps = document.querySelector(".borde02");
    ps.removeAttribute("type");
    document.querySelector(".novisible").style.display = "none"
    document.querySelector(".visible").style.display = "block"
  }

  let setA = () => {
    let ps = document.querySelector(".borde02");
    ps.setAttribute("type", "password");
    document.querySelector(".visible").style.display = "none"
    document.querySelector(".novisible").style.display = "block"
  }

  return (
    <div className="card-body col-12 row mx-auto">
      <div className="col-6">
        <form onSubmit={handelSubmitRegister}>
          <div className="card-title text-center">
            <h5 className="txt-font">Registrate</h5>
          </div>
          <div className="form-group">
            <span className=" ">Nombre De Usuario</span>
            <input className="form-control borde" onChange={handelRegister} onBlur={error} onFocus={color} name="name" placeholder="" type="text" />
          </div>
          <div className="form-group">
            <span className=" ">Correo Electronico</span>
            <input className="form-control borde1" onChange={handelRegister} onBlur={error} onFocus={color} name="email" placeholder="" type="text" />
          </div>
          <div className="form-group">
            <span className=" ">Mobil</span>
            <input className="form-control borde2" onChange={handelRegister} onBlur={error} onFocus={color} name="mobile" placeholder="" type="text" />
          </div>
          <div className="form-group">
            <span className=" ">Contraseña</span>
            <input className="form-control borde3" onChange={handelRegister} onBlur={error} onFocus={color} name="password" placeholder="" type="text" />
          </div>
          <input type="submit" className="btn btn-primary btn-block" value="Registrarme"/>

        </form>
      </div>

      <div className="col-6">
        <div className="card-title text-center txt-font mt-3"><h5>Inicia Sesion</h5></div>
        <form className="mt-4" onSubmit={loginUser}>
          <div className="form-group">
            <span className="">Correo Electronico</span>
            <input className="form-control borde01" onChange={handelChange} onBlur={errorLogin} onFocus={colorLogin} name="email" type="email" autoComplete="username" />

          </div>

          <span className="">Contraseña</span>
          <div className="form-group">
            <div className="from-control">
              <input className="form-control borde02" onChange={handelChange} onBlur={errorLogin} onFocus={colorLogin} name="password" type="password" autoComplete="current-password" />
              <img src={noVisible} onClick={removeA} title="ver contraseña" className="btn  novisible" height="50" width="50" alt="" />
              <img src={visible} onClick={setA} title="ocultar contraseña" className="btn visible" height="50" width="50" alt="" />
            </div>
          </div>
          <input type="submit" className="btn btn-primary btn-block" value="Iniciar Sesion" />
        </form>

      </div>
    </div>
  )
}

export default withRouter(Formularios)
