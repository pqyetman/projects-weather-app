import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import FutureForcast from "./FutureForcast"
import HistoricalForcast from './HistoricalForcast';
import SignUp from './SignUp';
import NavigationBar from './NavigationBar'
import About from "./About"
import { useState, useEffect } from 'react';

function App() {

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getLocation = () => {

    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    }

    else {
      setStatus('Locating...');

      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("Location Determined");
        setLat(parseFloat(position.coords.latitude).toFixed(2));
        setLng(parseFloat(position.coords.longitude).toFixed(2));
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  useEffect(() => {

    if (lng & lat) {

      console.log('lng at lat are good')

      fetch(`https://api.weather.gov/points/${lat},${lng}`)
        .then(r => r.json()).then(d => setForecast(d.properties.forecastHourly))
    }

    else {

      getLocation()

    }

  }, [lng, lat]);



  return (
    <>
     <NavigationBar/>
      <Switch>
        <Route exact path="/home">
          <Home lng={lng} lat={lat} forecast={forecast} />
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
