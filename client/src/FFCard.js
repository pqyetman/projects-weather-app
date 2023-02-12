import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { useState, useEffect } from 'react';
import { windSpeed, filterWeather, filterWeatherString, dateConversion } from './WeatherDataFunctions'

function FFCard({dailyForcast =[]}) {

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
          <Card.Title>{dateConversion(date)}</Card.Title>
          <Card.Text>{filterWeather(weather+"day")}</Card.Text>
          <Card.Text className="align-self-center">
            {filterWeatherString(weather+"day")}
          </Card.Text>
          </Stack>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="bg-transparent border-white text-white">Max Temp: {tempMax} &#8451; | {(parseFloat(tempMax) * 9 / 5 + 32).toFixed(1)} &#8457;  </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-white text-white">Min Temp: {tempMin}&#8451; | {(parseFloat(tempMin) * 9 / 5 + 32).toFixed(1)} &#8457; </ListGroup.Item>  
          <ListGroup.Item className="bg-transparent border-white text-white">Wind Speed: {windSpeed(dailyForcast.wind10m_max)}</ListGroup.Item>          
        </ListGroup>     
      </Card>
    );
  }
  
  export default FFCard;