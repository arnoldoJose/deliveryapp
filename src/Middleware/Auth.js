import React, {useState} from 'react'

let CRMContext = React.createContext();

let dataAuth = {
  token: "",
  auth: false,
  user: ""
};

const CRMProvider = ({children}) => {

  const [auth,guardarAuth] = useState(dataAuth);

  return (
    <CRMContext.Provider value={{auth,guardarAuth}}>
      {children}
    </CRMContext.Provider>
  )
}

export  {CRMContext ,CRMProvider}
