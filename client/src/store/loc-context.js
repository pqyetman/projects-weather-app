import React, { useState, useEffect } from 'react';
import {getAddress} from '../geocode/geocode.js';


const LocContext = React.createContext({
  location: "New York City, New York" , 
  setLocation: ()=>{}, 
  lng: null,
  setLng: ()=>{}, 
  lat: null,
  setLat: ()=>{}, 
  forecast: null,
  setForecast: ()=>{},
  weeklyForcast: null,
  setWeeklyForcast: ()=>{}
 
});

export function LocContextProvider (props) {

  const [location, setLocation] = useState(false);
  const [lng, setLng] = useState(false);
  const [lat, setLat] = useState(false);
  const [forecast, setForecast] = useState([]); 
  const [weeklyForcast, setWeeklyForcast] = useState([]);
 



  
  const getLocation = () => {

    if (!navigator.geolocation) {
      alert("Your Browser Does Not Support Geolocation");
      setLng("45.00")
      setLat("45.00")
    }

    else {
      navigator.geolocation.getCurrentPosition((position) => {
       setLat(parseFloat(position.coords.latitude).toFixed(2));
        setLng(parseFloat(position.coords.longitude).toFixed(2));

      }, () => {
        alert("Location Not Retrieved")
       setLng("45.00")
        setLat("45.00")
      });
    }
  }

  useEffect(()=>{

    if (typeof lng === "string" & typeof lat === "string") {    

      getAddress(lat, lng, setLocation)
     
    }
  else { getLocation() } 

  },[lng, lat])




  
    return (
      <LocContext.Provider
        value={{
            location,
            setLocation,                            
            lng,
            setLng,
            lat,
            setLat,
            forecast,
            setForecast,
            weeklyForcast,
            setWeeklyForcast
          
        }}
      >
        {props.children}
      </LocContext.Provider>
    );
  };
  
  export default LocContext;