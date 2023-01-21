import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import SearchCityBar from './SearchCityBar';
import FFCarousel from './FFCarousel';
import ListGroup from 'react-bootstrap/ListGroup';
import { statCloudCover, statHumidity, statPrec, statLiftedIndex, statTemp, percipitationAmount, cloudCoverage } from './WeatherDataFunctions'





function FutureForcast({ futureForcast, lng, lat, location, setLocation, setLng, setLat, weeklyForcast }) {


  const [cloudData, setCloudData] = useState([])
  const [humidityData, setHumidityData] = useState([])
  const [precData, setPrecData] = useState([])
  const [liftedIndexData, setLiftedIndexData] = useState([])
  const [tempData, setTempData] = useState([])

  useEffect(() => {


    if (typeof lng === "string" & typeof lat === "string") {

      setCloudData(statCloudCover(futureForcast))

      setHumidityData(statHumidity(futureForcast))

      setPrecData(statPrec(futureForcast))

      setLiftedIndexData(statLiftedIndex(futureForcast))

      setTempData(statTemp(futureForcast))

      console.log("ff data set")

    }

    else {
      console.log("Longitude and Lattitude are no good")
    }

  }, [futureForcast])



  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col md={12} className="text-center text-white  ">
          <Row className="mt-2 justify-content-center justify-content-md-start">
            <Col md={4} xs={8} lg={3} className="d-block d-md-inline ms-2" >
              <SearchCityBar setLocation={setLocation} setLng={setLng} setLat={setLat} />
            </Col>
            <Row className="pt-5 pt-md-2">
              <h2>{location}</h2>
            </Row>
          </Row>
          <Row className="mt-4 py-4">
            <Col md={12}>
              <h3 className="text-center text-white"><u>Weekly Statistics</u></h3>
            </Col>
          </Row >

          <Carousel indicators={false} slide interval={3000} className="pb-4 my-4 d-block d-md-none">
            <Carousel.Item>
              <Row >
                <h4 className="text-center">Cloud Coverage</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {cloudCoverage(cloudData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {cloudCoverage(cloudData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {cloudCoverage(cloudData[2])}</ListGroup.Item>
              </ListGroup>
            </Carousel.Item>
            <Carousel.Item>


              <Row >
                <h4 className="text-center">Lifted Index</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {liftedIndexData[0]} </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average:  {liftedIndexData[1]}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum:  {liftedIndexData[2]}</ListGroup.Item>
              </ListGroup>


            </Carousel.Item>
            <Carousel.Item>

              <Row >
                <h4 className="text-center">Temperature</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {tempData[0]}&#8451; | {(parseFloat(tempData[0]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {tempData[1]}&#8451; | {(parseFloat(tempData[1]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {tempData[2]}&#8451;  | {(parseFloat(tempData[2]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
              </ListGroup>

            </Carousel.Item>
            <Carousel.Item>
              <Row >
                <h4 className="text-center">Percipitation Amount</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {percipitationAmount(precData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {percipitationAmount(precData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {percipitationAmount(precData[2])}</ListGroup.Item>
              </ListGroup>

            </Carousel.Item>

            <Carousel.Item>
              <Row >
                <h4 className="text-center">Humidty</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {humidityData[0]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {humidityData[1]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {humidityData[2]}%</ListGroup.Item>
              </ListGroup>

            </Carousel.Item>
          </Carousel>


          <Row className="mt-2 d-none d-md-flex justify-content-center  ">
            <Col md={2} className="bg-transparent text-white border-end border-start border-white">
              <Row >
                <h4 className="text-center">Cloud Coverage</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {cloudCoverage(cloudData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {cloudCoverage(cloudData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {cloudCoverage(cloudData[2])}</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Lifted Index</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {liftedIndexData[0]} </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average:  {liftedIndexData[1]}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum:  {liftedIndexData[2]}</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Temperature</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {tempData[0]}&#8451; | {(parseFloat(tempData[0]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {tempData[1]}&#8451; | {(parseFloat(tempData[1]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {tempData[2]}&#8451;  | {(parseFloat(tempData[2]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Percipitation Amount</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {percipitationAmount(precData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {percipitationAmount(precData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {percipitationAmount(precData[2])}</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Humidty</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {humidityData[0]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {humidityData[1]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {humidityData[2]}%</ListGroup.Item>
              </ListGroup>
            </Col>

          </Row>
          <Row className="py-4 mt-4">
            <Col md={12}>
              <h3 className="text-center text-white"><u>Daily Forecast</u></h3>
            </Col>
          </Row>


          <Row >
            <Col md={12}>
              <FFCarousel weeklyForcast={weeklyForcast} lng={lng} lat={lat} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FutureForcast;