import { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import SearchCityBar from './SearchCityBar';
import FFCarousel from './FFCarousel';
import ListGroup from 'react-bootstrap/ListGroup';
import { statCloudCover, statHumidity, statPrec, statLiftedIndex, statTemp, percipitationAmount, cloudCoverage } from './WeatherDataFunctions'
import LocContext from './store/loc-context'
import useHttp from './hooks/use-http';
import PlaceHolder from './PlaceHolder';


function FutureForcast() {

  const { loading, error, sendRequest: fetchWeather } = useHttp();

  const ctx = useContext(LocContext)

  const [cloudData, setCloudData] = useState([])
  const [humidityData, setHumidityData] = useState([])
  const [precData, setPrecData] = useState([])
  const [liftedIndexData, setLiftedIndexData] = useState([])
  const [tempData, setTempData] = useState([])


  useEffect(() => {


    if (typeof ctx.lng === "string" & typeof ctx.lat === "string") {  

      
      fetchWeather({ url: `https://www.7timer.info/bin/api.pl?lon=${ctx.lng}&lat=${ctx.lat}&product=civillight&output=json` },
        ctx.setWeeklyForcast
      )     

      fetchWeather({ url: `https://www.7timer.info/bin/api.pl?lon=${ctx.lng}&lat=${ctx.lat}&product=civil&output=json` },
      ctx.setForecast) 

    }    


  }, [ctx.lng, ctx.lat]);

  useEffect(() => {


    if(!loading){
      setCloudData(statCloudCover(ctx.forecast))
      setHumidityData(statHumidity(ctx.forecast))
      setPrecData(statPrec(ctx.forecast))
      setLiftedIndexData(statLiftedIndex(ctx.forecast))
      setTempData(statTemp(ctx.forecast))

    }

  }, [ctx.forecast, loading])



  return (
    <Container fluid >
      <Row>
        <Col md={12} className="text-center text-white ">
          <Row className="mt-2 justify-content-center justify-content-md-start">
            <Col md={4} xs={8} lg={3} className="d-block d-md-inline ms-2" >
              <SearchCityBar />
            </Col>
            <Row className="pt-5 pt-md-2">
              <h2>{loading || ctx.location === false ? <PlaceHolder/> :ctx.location}</h2>
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
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : cloudCoverage(cloudData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {loading ? <PlaceHolder size = {6}/> : cloudCoverage(cloudData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : cloudCoverage(cloudData[2])}</ListGroup.Item>
              </ListGroup>
            </Carousel.Item>
            <Carousel.Item>


              <Row >
                <h4 className="text-center">Lifted Index</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : liftedIndexData[0]} </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average:  {loading ? <PlaceHolder size = {6}/> : liftedIndexData[1]}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum:  {loading ? <PlaceHolder size = {6}/> : liftedIndexData[2]}</ListGroup.Item>
              </ListGroup>


            </Carousel.Item>
            <Carousel.Item>

              <Row >
                <h4 className="text-center">Temperature</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : tempData[0]}&#8451; | {loading ? <PlaceHolder size = {6}/> : (parseFloat(tempData[0]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {loading ? <PlaceHolder size = {6}/> : tempData[1]}&#8451; | {loading ? <PlaceHolder size = {6}/> : (parseFloat(tempData[1]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : tempData[2]}&#8451;  | {loading ? <PlaceHolder size = {6}/> : (parseFloat(tempData[2]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
              </ListGroup>

            </Carousel.Item>
            <Carousel.Item>
              <Row >
                <h4 className="text-center">Percipitation Amount</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : percipitationAmount(precData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {loading ? <PlaceHolder size = {6}/> : percipitationAmount(precData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : percipitationAmount(precData[2])}</ListGroup.Item>
              </ListGroup>

            </Carousel.Item>

            <Carousel.Item>
              <Row >
                <h4 className="text-center">Humidty</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-0 text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : humidityData[0]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Average: {loading ? <PlaceHolder size = {6}/> : humidityData[1]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-0 text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : humidityData[2]}%</ListGroup.Item>
              </ListGroup>

            </Carousel.Item>
          </Carousel>


          <Row className="mt-2 d-none d-md-flex justify-content-center  ">
            <Col md={2} className="bg-transparent text-white border-end border-start border-white">
              <Row >
                <h4 className="text-center">Cloud Coverage</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : cloudCoverage(cloudData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size = {6}/> : cloudCoverage(cloudData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : cloudCoverage(cloudData[2])}</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Lifted Index</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : liftedIndexData[0]} </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average:  {loading ? <PlaceHolder size = {6}/> : liftedIndexData[1]}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum:  {loading ? <PlaceHolder size = {6}/> : liftedIndexData[2]}</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Temperature</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : tempData[0]}&#8451; | {loading ? <PlaceHolder size = {6}/> :(parseFloat(tempData[0]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size = {6}/> : tempData[1]}&#8451; | {loading ? <PlaceHolder size = {6}/> :(parseFloat(tempData[1]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : tempData[2]}&#8451;  | {loading ? <PlaceHolder size = {6}/> :(parseFloat(tempData[2]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Percipitation Amount</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : percipitationAmount(precData[0])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size = {6}/> : percipitationAmount(precData[1])}</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : percipitationAmount(precData[2])}</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
              <Row >
                <h4 className="text-center">Humidty</h4>
              </Row>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size = {6}/> : humidityData[0]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size = {6}/> : humidityData[1]}%</ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size = {6}/> : humidityData[2]}%</ListGroup.Item>
              </ListGroup>
            </Col>

          </Row>
          <Row className="py-5 mt-4">
            <Col md={12}>
              <h3 className="text-center text-white"><u>Daily Forecast</u></h3>
            </Col>
          </Row>


          <Row >
            <Col md={12}>
              <FFCarousel loading={loading}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FutureForcast;