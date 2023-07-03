import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { useState, useEffect } from 'react';
import { windSpeed, filterWeather, filterWeatherString, dateConversion } from './WeatherDataFunctions';
import PlaceHolder from './PlaceHolder';

function FFCard({dailyForcast =[], loading}) {

  const [tempMax, setTempMaxData] = useState("")
  const [tempMin, setTempMinData] = useState("")

  const {temp2m, date, weather } = dailyForcast

  useEffect(() => {

    
   
      if (temp2m) {
     setTempMaxData(temp2m.max)
     setTempMinData(temp2m.min)  
      }



  }, [dailyForcast]);


    return (
      <Card style={{ width: '18rem' , background: "transparent", borderColor: "white" }}>       
        <Card.Body className="text-white d-flex">
        <Stack direction="vertical" gap={0}>
          <Card.Title>{loading ? <PlaceHolder size = {6}/> : dateConversion(date)}</Card.Title>
          <Card.Text>{loading ? <PlaceHolder size = {6}/> :filterWeather(weather+"day")}</Card.Text>
          <Card.Text className="align-self-center">
            {loading ? <PlaceHolder size = {6}/> : filterWeatherString(weather+"day")}
          </Card.Text>
          </Stack>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="bg-transparent border-white text-white">Max Temp: {loading ? <PlaceHolder size = {6}/> :tempMax} &#8451; | {loading ? <PlaceHolder size = {6}/> :(parseFloat(tempMax) * 9 / 5 + 32).toFixed(1)} &#8457;  </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-white text-white">Min Temp: {loading ? <PlaceHolder size = {6}/> :tempMin}&#8451; | {loading ? <PlaceHolder size = {6}/> :(parseFloat(tempMin) * 9 / 5 + 32).toFixed(1)} &#8457; </ListGroup.Item>  
          <ListGroup.Item className="bg-transparent border-white text-white">Wind Speed: {loading ? <PlaceHolder size = {6}/> :windSpeed(dailyForcast.wind10m_max)}</ListGroup.Item>          
        </ListGroup>     
      </Card>
    );
  }
  
  export default FFCard;