import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import { windSpeed, filterWeatherString, filterWeather } from './WeatherDataFunctions';
import PlaceHolder from './PlaceHolder';

function EightHourCard({ hourForecast, loading }) {

  const [windspeed, setWindspeed] = useState("")
  const [windDirection, setWindDirection] = useState("")


  useEffect(() => {

    if (hourForecast)
    {

      console.log("windspeed set")
    setWindspeed(hourForecast.wind10m.speed)
    setWindDirection(hourForecast.wind10m.direction)}

    else {console.log("wind speed not set")}

  })



  return (
    <Card className="text-center" style={{ width: '15rem', background: "transparent", borderColor: "white" }}>      
        <Card.Body className="d-flex justify-content-center">
        <Stack gap={3}>
          <Card.Title >{loading ? <PlaceHolder size = {6}/> : filterWeather(hourForecast.weather)}</Card.Title>
          <Card.Text className="text-center" >
            {loading ? <PlaceHolder size = {6}/> : filterWeatherString(hourForecast.weather)}
          </Card.Text>
          </Stack>
        </Card.Body>
    
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="bg-transparent border-white text-white">Temp: {loading ? <PlaceHolder size = {6}/> :(parseFloat(hourForecast.temp2m) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Humidity: {loading ? <PlaceHolder size = {6}/> : hourForecast.rh2m} </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Wind Speed: {loading ? <PlaceHolder size = {6}/> : windSpeed(windspeed)} {windDirection}</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white text-capitalize">Perciptiation: {loading ? <PlaceHolder size = {6}/> : hourForecast.prec_type}</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Lifted Index: {loading ? <PlaceHolder size = {6}/> : hourForecast.lifted_index} </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default EightHourCard;