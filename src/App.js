import './App.css';
import StocksPage from './components/StocksPage';
import Home from './components/Home';
import SideNav from './components/SideNav';
import CryptoGragh from './components/MOHAMMAD/CryptoGragh';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <SideNav />

    <Switch>
        <Route path="/" exact component={ Home } />  
        <Route path="/stocks" component={ StocksPage } /> 
        {/* <Route path="/forex" component={ ForexPage } />  */}
        <Route path="/crypto" component={ CryptoGragh} /> 
        {/* <Route path="/news" component={ NewsPage } />  */}
    </Switch>
  
  </Router>
  );
}

export default App;
