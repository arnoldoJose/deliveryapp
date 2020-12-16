import React, { useState } from "react";

let CRMUpdate = React.createContext();


const CRMState = ({ children }) => {
  let [update, saveUpdate] = useState(true);

  return (
    <CRMUpdate.Provider value={{ update, saveUpdate }}>
      {children}
    </CRMUpdate.Provider>
  );
};

export { CRMUpdate, CRMState };
