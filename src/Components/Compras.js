import React, {useEffect, useState,useContext} from 'react'
import clienteAxios from '../Config/axios';
import Spinner from './Spinner';
import { CRMContext } from '../Middleware/Auth';

import '../css/Shadows.css';

const Compras = ({history}) => {

  const { auth} = useContext(CRMContext);
  const [data,saveData] = useState([]);
  const [consultar,saveConsultar] = useState(true);

  useEffect(() => {
    if(consultar){
      let consulta =  () => {
       clienteAxios.get("/miscompras")
       .then((value) => {
         saveData(value.data);
         saveConsultar(false);
       })
      }
      consulta();
    }
  },[consultar]);


  let constatar = async (id) => {
    await clienteAxios.delete(`/eliminar/pedio/${id}`);
    saveConsultar(true);
    return;
  }
  
  if (!auth.auth) history.push("/user-login")
  
  return (data.length === 0) ? <Spinner /> : (
    <div className="contenedor-compras m-5">
      <h1 className="text-center">Tus Ordenes</h1>
      <main>
        <section>
       <ul className="list-group list-li col-sm-12">
       {data.map(item => (
         <li key={item._id} className=" d-flex justify-content-between align-items-center m-3">
           <p>Nombre: {item.name}</p>
           <p>Precio: {item.precio}</p>
           <img
             src={item.img}
             className="img-fluid"
             width="110"
             height="95"
             alt=""
           />
           <button className="btn btn-danger btn-comparas" onClick={() => constatar(item._id)}>
             Borrar
      </button>
         </li>
       ))}
       </ul>
        </section>
      </main>

    </div>
  )
}

export default Compras
/**
 *  {data.map(item => (

        <li key={item._id}>
        <p>{item.name}</p>
        <p>{item.precio}</p>
        <img
          src={item.img}
          className="img-fluid"
          width="110"
          height="95"
          alt=""
        />
        <button className="btn btn-danger" onClick={() => br(item._id)}>
               Borrar
        </button>
      </li>
         ))}
 */