import React from 'react'
import '../css/spinner.css';
const Spinner = () => {
  return (

    <div className="text-center">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner
