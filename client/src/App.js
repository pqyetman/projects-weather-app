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
import Geocode from "react-geocode";
import { calcGMTShiftInit } from './WeatherDataFunctions'


function App() {

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState("City, State, Country")
  const [hoursFromInit, setHoursFromInit] = useState(0)
  const [futureForcast, setFutureForcast] = useState(null);
  const [weeklyForcast, setWeeklyForcast] = useState(null);



  let day = new Date()
  let timezone = day.getTimezoneOffset() / 60
  let hour = day.getHours()
  const goggleAPI = "AIzaSyAoj5Boh6PpADQCUpF1JLZbxR56R58ST5A"

  Geocode.setApiKey(`${goggleAPI}`)

  //function to get location from browser

  const getLocation = () => {

    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    }

    else {
      setStatus('Locating...');

      navigator.geolocation.getCurrentPosition((position) => {
       
        setLat(parseFloat(position.coords.latitude).toFixed(2));
        setLng(parseFloat(position.coords.longitude).toFixed(2));
      }, () => {
        alert('Unable to retrieve your location')
        setLat(-82.86)
        setLng(135.00)
        ;
      });
    }
  }

  //This uses the lng and lat to pull weather data. 
  //It will try and retrieve your location if it doenst have 
  //longitude and lattitude and will run each time the lng and lat are chnaged


  useEffect(() => {

    console.log(timezone, day)

    console.log(`lng at lat are ${lng} and ${lat} lng is a ${typeof lng} and lat is a ${typeof lat}  ${lng === true}`)

    if (typeof lng === "string" & typeof lat === "string") {


      fetch(`https://www.7timer.info/bin/api.pl?lon=${lng}&lat=${lat}&product=civil&output=json`)
        .then(r => r.json())
        .then(d => {
          setForecast(d.dataseries) 
          setFutureForcast(d.dataseries)   
        })

        fetch(`https://www.7timer.info/bin/api.pl?lon=${lng}&lat=${lat}&product=civillight&output=json`)
        .then(r => r.json())
        .then(d => {
         setWeeklyForcast(d.dataseries)
        })
    

      Geocode.fromLatLng(`${lat}`, `${lng}`).then(
        (response) => {
          const address = response.results[0].formatted_address.split(" ")
          const addressRemoveFirst = address.shift();
          const editedAddress = address.join(" ").toString()

          setLocation(editedAddress);
        })
    }

    else {
      console.log("used local address")
      getLocation()

    }


  }, [lng, lat]);



  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/home">
          <Home lng={lng} lat={lat} forecast={forecast} setLng={setLng} setLat={setLat} setLocation={setLocation} location={location} hoursFromInit={hoursFromInit} />
        </Route>
        <Route exact path="/futureforcast">
          <FutureForcast weeklyForcast={weeklyForcast} futureForcast={futureForcast} lng={lng} lat={lat} location={location} setLocation={setLocation} setLng={setLng} setLat={setLat} />
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
