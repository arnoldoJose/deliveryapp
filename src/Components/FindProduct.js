import React, { useEffect,useState,useContext} from 'react'
import Spinner from './ComponentOrders/Spinner';
import clienteAxios from '../Config/axios';
import Swal from 'sweetalert2';
import {CRMContext} from '../Middleware/Auth';

const FindProduct = ({match}) => {

  const {auth} = useContext(CRMContext);
  const [data,saveData] = useState();
 
  let id = match.params.id;

  useEffect(() => {   
    let consultarAPI = async () => {
      let res = await clienteAxios.get(`/obtener/producto/${id}`);
      saveData(res.data);
    }
    consultarAPI();
  
  }, [id]);
//agregar la cantidad de pedidos
  let hacerCompra =  () => {
    if(auth.auth){
      clienteAxios.post("/compra",data);
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
    }else{
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Inicia Sesion Para Poder Ordenar',
  
       })
   
   }
  return;
  }

  return (!data) ? <Spinner/> :(
    <div className="col-12 col-sm-4 col-sm-9 col-lg-9 mx-auto mt-5 m-auto p-5">
    
      <div className="card">
        <div className="row no-gutters">
          <div className="col-sm-12 col-lg-5">
            <img src={data.img} className="card-img-top" alt="" />
          </div>
          <div className="col-5">
            <div className="card-body mt-5">
            <div className="container-text">
            <p>{data.name}</p>
                <p className="d-flex">Precio: C${data.precio}</p>
              </div>
            <button className="btn btn-warning btn-block mt-5" onClick={hacerCompra}>Ordenar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindProduct
