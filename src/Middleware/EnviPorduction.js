import React,{useState} from 'react'

const CRMENVProduction = React.createContext();

const EnviPorduction = ({children}) => {

  let url = "https://blooming-scrubland-19789.herokuapp.com";

  const [envidev,saveDev] = useState(url);

  return (
    <CRMENVProduction.Provider value={{envidev,saveDev}}>
            {children}
    </CRMENVProduction.Provider>
  )
}

export {CRMENVProduction,EnviPorduction}
