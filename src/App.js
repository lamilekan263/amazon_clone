import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Header from './components/header.Component/Header'
import Home from "./components/home.Component/Home";
import CheckOut from "./components/checkOut.component/CheckOut";
function App (){
    return (
      <div>
        <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/checkout' component= {CheckOut} />
        </Switch>
      </div>
    );
}


export default App;