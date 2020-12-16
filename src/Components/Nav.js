import React, { Fragment } from 'react'
import {Link, NavLink} from 'react-router-dom';
import menu from '../svg/simbolo-de-menu-de-tres-lineas-paralelas.svg';
import user from '../svg/usuario.svg';
import scooter from '../svg/scooter.svg';
import {withRouter} from 'react-router-dom';
import  '../css/App.css';
import '../css/Shadows.css';

import {ocultar,aparece} from '../Components/eventosNav';



const Nav = () => {
  
  return (
    <Fragment>
      <header className=" d-flex justify-content-between">
        <div className="menu-bar col-sm-12 col-md-11 col-lg-7 d-flex justify-content-between">
          <div className="contenedorImg ml-3">
            <Link to={"/"} title="volver al inicio">
              <img src={scooter} height="60" width="75" alt="" />
            </Link>
          </div>
          <div className="contenedorText txt-des mt-3 d-flex justify-content-between ">
            <h1>Delivery</h1>
          </div>
          <div className="container-svg d-flex">
            <NavLink to={"/user-login"}>
              <img
                src={user}
                height="40"
                width="45"
                alt=""
                className="user-logo"
              />
            </NavLink>
            <img
              src={menu}
              className="btn"
              width="50"
              height="50"
              alt=""
              onClick={aparece}
            />
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark col-lg-5">
          <div className="contenedor-x d-flex justify-content-end text-center">
            <p onClick={aparece}>X</p>
          </div>
          <ul className=" navbar-nav ml-auto">
            <li className=" m-2">
              {" "}
              <NavLink to="/user-login" onClick={ocultar} className="txt-font">
                Iniciar Sesion
              </NavLink>{" "}
            </li>
            <li className=" m-2">
              {" "}
              <Link to={"/shopping-card"} className="txt-font">
                Mis Compras
              </Link>{" "}
            </li>
            <li className="m-2">
              {" "}
              <NavLink to="/add-data-article" className="txt-font">
            agregar
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default withRouter(Nav);

/**
 * 
<button className="btn btn-success" onClick={animame}>animar</button>
 */

  