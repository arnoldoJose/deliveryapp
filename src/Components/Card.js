import React from 'react'
import '../css/App.css';
const Card = ({img}) => {
  return (
    <div className="col-6 col-sm-8 col-md-4 col-lg-4 mx-auto cd-img">
   
      <div className="card">
        <picture>
          <img src={img} alt="" className="card-img-top img-cat" loading="lazy" />
        </picture>
      </div>
   </div>
  )
}

export default Card
