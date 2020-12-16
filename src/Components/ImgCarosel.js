import React from 'react'

const ImgCarosel = ({img}) => {
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-9 mx-auto">
      <div className="card">
      
          <img src={img} className="card-img-top" height="300" width="450" alt="" />
     
      </div>
    </div>
  )
}

export default ImgCarosel
