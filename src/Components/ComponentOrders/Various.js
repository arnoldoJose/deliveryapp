import React,{useEffect,useState} from 'react'
import {withRouter} from 'react-router-dom';
import clienteAxios from '../../Config/axios';
import CardVarious from './CardVarious';
import Swal from 'sweetalert2';
import Search from '../Search';
import Spinner from './Spinner';

const Various = ({location}) => {

  let [datos, guardarDatos] = useState([]);
  const [orden, guardarOrden] = useState("");

  let categoria = location.pathname.split("/")[1]

  useEffect(() => {
    let consultarAPI = async () => {
      let data = await clienteAxios.get(`/product/all?categoria=${categoria}`);
      guardarDatos(data);
    }
    consultarAPI();
  }, [categoria])

  let consultarOrden = async () => {
    let res = await clienteAxios.get(`/obtener/orden?name=${orden}&categoria=${categoria}`);
    if (res.data.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${res.data.message}`,
      })
      
    } else {
      guardarDatos(res);
    }
  }


 
  return (!datos.data) ? <Spinner/> : (
   <div>
      <Search guardarOrden={guardarOrden} consultarOrden={consultarOrden}/>
      <div className="col-12 row p-5">
        {datos.data.map((item) => (<CardVarious key={item._id} data={item} />))}
      </div>
   </div>
  );
}

export default withRouter(Various);