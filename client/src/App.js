import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import FutureForcast from "./FutureForcast"
import HistoricalForcast from './HistoricalForcast';
import NavigationBar from './NavigationBar'
import About from "./About"
import Geocode from "react-geocode";




Geocode.setApiKey(`${process.env.REACT_APP_MAP_KEY}`)
Geocode.setLanguage("en")



function App() {



  return (

    <>

      <NavigationBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/futureforcast">
          <FutureForcast />
        </Route>
        <Route exact path="/historicalforcast">
          <HistoricalForcast />
        </Route>    
        <Route path="/">
          <About />
        </Route>
      </Switch>

    </>
  );
}

export default App;
