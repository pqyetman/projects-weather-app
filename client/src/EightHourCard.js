import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import { CloudMoon, CloudSun } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import { windSpeed, filterWeatherString, filterWeather } from './WeatherDataFunctions';

function EightHourCard({ hourForecast }) {

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
    <Card style={{ width: '15rem', background: "transparent", borderColor: "white" }}>
      
        <Card.Body className="d-flex justify-content-center">
        <Stack gap={3}>
          <Card.Title>{filterWeather(hourForecast.weather)}</Card.Title>
          <Card.Text  className="ps-2" style={{ width: '10rem', height: '7rem' }}>
            {filterWeatherString(hourForecast.weather)}
          </Card.Text>
          </Stack>
        </Card.Body>
    
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="bg-transparent border-white text-white">Temp: {(parseFloat(hourForecast.temp2m) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Humidity: {hourForecast.rh2m} </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Wind Speed: {windSpeed(windspeed)} {windDirection}</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white text-capitalize">Perciptiation: {hourForecast.prec_type}</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Lifted Index: {hourForecast.lifted_index} </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default EightHourCard;