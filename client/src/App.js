import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import TodaysForecast from "./TodaysForecast";
import FutureForcast from "./FutureForcast";
import HistoricalForcast from "./HistoricalForcast";
import NavigationBar from "./NavigationBar";
import About from "./About";
import useHttp from "./hooks/use-http";
import { getAddress } from "./geocode/geocode.js";
import LoadingScreen from "./LoadingScreen.js";

function App() {
  const { loading, error, sendRequest: fetchWeather } = useHttp();
  const [coords, setCoords] = useState({ lat: 40.71, lng: -73.9 });
  const [todaysWeather, setTodaysWeather] = useState([]);
  const [futureWeather, setFutureWeather] = useState([]);
  const [location, setLocation] = useState("New York City, NY");

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Your Browser Does Not Support Geolocation");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        setCoords({
          lat: parseFloat(latitude).toFixed(2),
          lng: parseFloat(longitude).toFixed(2),
        });
      });
    }
  };

  //Allows get location on the intial mount
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fetchWeather(
      {
        url1: `https://www.7timer.info/bin/api.pl?lon=${coords.lng}&lat=${coords.lat}&product=civillight&output=json`,
        url2: `https://www.7timer.info/bin/api.pl?lon=${coords.lng}&lat=${coords.lat}&product=civil&output=json`,
      },
      setFutureWeather,
      setTodaysWeather
    );

    getAddress(coords.lat, coords.lng, setLocation);
  }, [coords, fetchWeather]);

  return (
    <>
      <NavigationBar />
      <Switch>
        <Route
          exact
          path="/todaysforecast"
          render={() =>
            todaysWeather.length === 0 || futureWeather.length === 0 ? (
              <LoadingScreen />
            ) : (
              <TodaysForecast
                todaysWeather={todaysWeather}
                loading={loading}
                error={error}
                location={location}
                setLocation={setLocation}
                setCoords={setCoords}
              />
            )
          }
        />

        <Route
          exact
          path="/futureforecast"
          render={() =>
            todaysWeather.length === 0 || futureWeather.length === 0 ? (
              <LoadingScreen />
            ) : (
              <FutureForcast
                futureWeather={futureWeather}
                todaysWeather={todaysWeather}
                loading={loading}
                error={error}
                location={location}
                setCoords={setCoords}
              />
            )
          }
        />

        <Route
          exact
          path="/historicaldata"
          render={() => <HistoricalForcast />}
        />

        <Route path="/">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
