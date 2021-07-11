import React,{ Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home';
import main from './Components/main';



class App extends Component {
 render(){
   return( 
     <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/main" component={main}/>
            </Switch>
        </BrowserRouter>
     </div>
   );
 }
}

export default App;
