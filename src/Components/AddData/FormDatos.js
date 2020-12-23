import React, {useState,useContext} from 'react'

import {CRMContext} from '../../Middleware/Auth';
import Swal from 'sweetalert2';
import Axios from 'axios';

import { CRMENVProduction } from "../../Middleware/EnviPorduction";

const FormDatos = ({history}) => {

  const{ auth} = useContext(CRMContext);
    let { envidev } = useContext(CRMENVProduction);
 

  const [img,guardarImg] = useState("");
  const [name,saveName] = useState("");
  const [precio,savePrecio] = useState("");
  const [categotia,saveCategoria] = useState("");
  
  let {rol} = auth.user;

  let handelSubmit = async(e) => {
    e.preventDefault();
    const fd = new FormData();
    
    fd.append("imagen", img);
    fd.append("name", name);
    fd.append("precio", precio);
    fd.append("categoria", categotia);
  
    let data = await Axios.post(`${envidev}/add-product`, fd, {
      headers: { Authorization: `Bearer ${auth.token}` },});
    
    if(data.data.rol !== "ADMIN_ROLE"){
        Swal.fire({icon: "error",
          title: "Oops...",
          text: `${data.data.message}`,});
       document.querySelector(".frm").reset();
        return;
      }
      document.querySelector(".frm").reset();
  };

  if(!auth.auth || rol !== "ADMIN_ROLE") history.push("/");
  
  return (
    <div className="col-12 mt-5">
      <div className="card col-sm-12 col-md-9 col-lg-6 mx-auto">
        <div className="card-body">
          <form onSubmit={handelSubmit} className="mt-4 frm">
            <div className="form-group">
              <select className="form-control"  name="categoria" onChange={e => saveCategoria(e.target.value)}>
                <option className="">
                  -------------------------- Elige Una Categoria Para El Producto ------------------------
              </option>
                <option value="food">Comida</option>
                <option value="market">Marcado</option>
                <option value="various">Varios</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" className="form-control" name="name" onChange={e => saveName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="">Precio</label>
              <input type="text" className="form-control" name="precio" onChange={e => savePrecio(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="">Imagen</label>
              <input type="file" className="form-control" onChange={(e) => guardarImg(e.target.files[0])} />
            </div>
            <input type="submit" className=" btn btn-warning btn-block" value="+Agregar Producto"/>
          </form>
        </div>
      </div>
  </div>
  )
}

export default FormDatos
