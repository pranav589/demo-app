import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login/index'
import Listings from './components/Listings/index'

function App() {

  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' exact>
           <Login /> 
         </Route>
         <Route path='/listings' exact>
            <Listings/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
