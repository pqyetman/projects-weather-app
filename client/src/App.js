import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import FutureForcast from "./FutureForcast"
import HistoricalForcast from './HistoricalForcast';
import SignUp from './SignUp';
import NavigationBar from './NavigationBar'
import About from "./About"
import Geocode from "react-geocode";

const googleAPI = process.env.MAP_KEY
 
Geocode.setLanguage("en")
Geocode.setApiKey(`${googleAPI}`)


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
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>

    </>
  );
}

export default App;
