import './App.css';

import StocksPage from './components/StocksPage';
import Home from './components/Home';
import SideNav from './components/SideNav';
import MobileNav from './components/MobileNav';
import NewsPage from './components/NewsPage';
import CryptoGragh from './components/MOHAMMAD/CryptoGragh';
// import Exchange from './components/Exchange'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <SideNav />
    <MobileNav />

    <Switch>
        <Route path="/" exact component={ Home } />  
        <Route path="/stocks" component={ StocksPage } /> 
        <Route path="/news" component={ NewsPage } />  
        {/* <Route path="/forex" component={ Exchange } />  */}
        <Route path="/crypto" component={ CryptoGragh} /> 
    </Switch>
  
  </Router>
  );
}

export default App;
