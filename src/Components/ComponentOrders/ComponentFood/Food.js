import React, {useEffect,useState} from 'react'
import clienteAxios from '../../../Config/axios';
import Spinner from '../Spinner';
import {withRouter} from 'react-router-dom';
import CardsFood from '../ComponentFood/CardsFood';
import Swal from 'sweetalert2';
import Search from '../../Search';
import Axios from 'axios';
 const Food = ({location}) => {

  let [datos,guardarDatos] = useState([]);
  const [orden, guardarOrden] = useState("");

  let categoria = location.pathname.split("/")[1]

  useEffect(() => {
    //pasar a la carpeta hooks los effect
    let consultarAPI = async () => {      
      let data = await Axios.get(
        `https://blooming-scrubland-19789.herokuapp.com/product/all?categoria=${categoria}`
      );
    guardarDatos(data);
    
    }
    consultarAPI();
  }, [categoria]);

  let consultarOrden = async () => {
     let res = await clienteAxios.get(`/obtener/orden?name=${orden}&categoria=${categoria}`);
    if(res.data.message){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${res.data.message}`,
      })
   
    }else{
      guardarDatos(res);
    }
  }

   return !datos.data ? (
     <Spinner />
   ) : (
     <div>
       <Search guardarOrden={guardarOrden} consultarOrden={consultarOrden} />
       <h1>CATEGORIA DE COMIDAS</h1>
       <div className="col-12 row p-5">
         {datos.data.map((item) => (
           <CardsFood key={item._id} data={item} />
         ))}
       </div>
     </div>
   );
}
export default withRouter(Food);