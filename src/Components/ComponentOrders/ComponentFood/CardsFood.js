import React from 'react'
import {Link} from 'react-router-dom';

const CardsFood = ({data}) => {
  return (
    <div className="col-sm-5 col-md-4 col-lg-3 mx-auto m-3">
      <div className="card">
  
        <img src={data.img} className="card-img-top" alt=""/>
        <div className="card-body">
          <p>{data.name}</p>
  <label htmlFor="" className="d-flex">Precio: C$<p>{data.precio}</p></label>
        </div>
      <div className="card-footer mx-auto">
        <Link to={`/find-product/${data._id}`} style={{width: 12+"em"}} className="btn btn-warning">Ver Producto</Link>
      </div>
      </div>
    </div>
  )
}

export default CardsFood
