import React from 'react';
import './css/App.css';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Food from './Components/ComponentOrders/ComponentFood/Food';
import Various from './Components/ComponentOrders/Various';
import FormDatos from "./Components/AddData/FormDatos";
import Market from './Components/ComponentOrders/Market';
import Compras from './Components/Compras';
import FindProduct from './Components/FindProduct';
import {CRMProvider} from './Middleware/Auth';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
 
function App() {

  return (
    <Router>
      <CRMProvider>
          <div className="contenedorSupremo">
            <Nav />
            <Switch>
              <Route exact path="/deliveryapp" component={Menu} />
              <Route exact path="/user-login" component={Register} />
              <Route exact path="/food" component={Food} />
              <Route exact path="/various" component={Various} />
              <Route exact path="/find-product/:id" component={FindProduct} />
              <Route exact path="/market" component={Market} />
              <Route exact path="/add-data-article" component={FormDatos} />
              <Route exact path="/shopping-card" component={Compras} />    
            </Switch>
            <Footer />
          </div>
       
      </CRMProvider>
    </Router>
  );
}

export default App;