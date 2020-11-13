//import logo from './logo.svg';
import './App.css';
import AllData from './pages/AllData.js';
import Add from './component/Add.js';
import Wrapper from './container/Wrapper.js';
import GBar from './grafik/GBar.js'

import Dashboard from './pages/Dashboard.js';

import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <div>
            <div className="app-shell">
              <Switch>
                <Route path="/alldata" component={AllData} />
                <Route path="/add" component={Add} />
                <Route path="/dash" component={Dashboard} />
                <Route path="/wrapper" component={Wrapper} />
                <Route path="/gbar" component={GBar} />
                

                <Redirect from="/" to="/wrapper" />
              </Switch>
            </div>
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
