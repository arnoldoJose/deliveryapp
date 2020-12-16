import React, {useEffect,useState} from 'react'
import clienteAxios from '../../Config/axios';
import {withRouter} from 'react-router-dom';

import Spinner from './Spinner';
import CardMarket from './CardMarket';
import Search from '../Search';
import Swal from 'sweetalert2';

const Market = ({location}) => {


  let [datos, guardarDatos] = useState([]);
  const [orden,guardarOrden] = useState("");

  let categoria = location.pathname.split("/")[1]

  useEffect(() => {

    let consultarAPI = async () => {
        let data = await clienteAxios.get(
          `/product/all?categoria=${categoria}`
        );
        guardarDatos(data);
    }
    consultarAPI();
  }, [categoria]);


  let consultarOrden = async () => {
   
    let res = await clienteAxios.get(`/get-orden?name=${orden}&categoria=${categoria}`);
   
    if(res.data.message){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${res.data.message}`,
      })

    } else {
      guardarDatos(res);
    }
    
   
  }

  if (!datos.data) return <Spinner />;

  return (

  <div className="contiainer-marker">
      <Search guardarOrden={guardarOrden} consultarOrden={consultarOrden} />
     
      <div className="col-12 row p-5">
      {datos.data.map((item) => <CardMarket key={item._id} data={item} />)}
      </div>
  </div>
  
  )
}

export default withRouter(Market)
