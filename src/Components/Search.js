import React from 'react'
import {withRouter} from 'react-router-dom';
const Search = ({ guardarOrden, consultarOrden,location}) => {

  
  let holderName = "";
  switch (location.pathname) {
    case "/market":
      holderName = "Encuentra todo del Supermercado";
      break;
    case "/food":
      holderName = "Busca la Comida que te gusta";
      break;
    case "/various":
      holderName = "En cuentra todo de la farmacia"
      break;
    default:
      break;
  }

  return (
    <div className="container-search col-sm-12 col-md-9 col-lg-9 mx-auto">
      <div className="form-group d-flex m-3">
        <input type="text" name="name" placeholder={`${holderName}`} className="form-control mr-1" onChange={e => guardarOrden(e.target.value)} />
        <input type="button" value="Buscar" className="btn btn-warning" onClick={() => consultarOrden()}/>
      </div>
    </div>
  );
}

export default withRouter(Search) 
