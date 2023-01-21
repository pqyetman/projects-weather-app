import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CloudDrizzleFill, ThermometerHalf, Wind } from 'react-bootstrap-icons'
import EightHourCard from './EightHourCard';
import SearchCityBar from './SearchCityBar';
import Carousel from 'react-bootstrap/Carousel';
import { windSpeed, cloudCoverage, percipitationAmount, filterWeatherString } from './WeatherDataFunctions'



function Home({ lng, lat, forecast = [], setLng, setLat, location, setLocation, hoursFromInit }) {



  const [currentForcast, setCurrentForcast] = useState([])
  const [windDirection, setWindDirection] = useState("")
  const [windspeed, setWindspeed,] = useState("")
  const [threeHour, setThreeHour] = useState("")
  const [sixHour, setSixHour] = useState("")
  const [nineHour, setNineHour] = useState("")
  const [twelveHour, setTwelveHour] = useState("")




  let today = new Date()
  let date = parseInt(today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()





  useEffect(() => {

    console.log(`Hours from init: ${hoursFromInit}`)

    if (typeof lng === "string" & typeof lat === "string") {
      console.log(`Longitude and Lattitude are : ${lng}, ${lat}`);
      console.log(`${date}`)

      setCurrentForcast(forecast[2])
      setWindspeed(forecast[2].wind10m.speed)
      setWindDirection(forecast[2].wind10m.direction)
      setThreeHour(forecast[3])
      setSixHour(forecast[4])
      setNineHour(forecast[5])
      setTwelveHour(forecast[6])
    }

    else {
      console.log("Longitude and Lattitude are no good")
    }


  }, [forecast]);












  return (
    <>
      <Container fluid >

        <Col md={12} className="text-white pb-4 mb-0">
          <Row >
            <Col md={3} className="border-end border-white border-2 rounded-end  px-2" >
              <Row className="mb-3 mt-4 mx-3 pb-4" >
                <SearchCityBar setLocation={setLocation} setLng={setLng} setLat={setLat} />
              </Row >
              <Row className=" mx-2 my-4 pt-4 border-bottom border-white">
                <h2 className="text-center text-uppercase fw-bold font-monospace ">{`${location}`}</h2>
              </Row>
              <Row className=" mx-2 mb-4 border-bottom border-white">
                <h4 className="text-center text-uppercase fw-bold">Date: {date}</h4>
                <h5 className="text-center ">Current Forecast: {filterWeatherString(currentForcast.weather)}</h5>
              </Row>
              <Row className=" mx-3 mb-3 text-end border-bottom border-white">
                <h3><span><ThermometerHalf /></span>Current Temp. </h3>
                <h1>{(parseFloat(currentForcast.temp2m) * 9 / 5 + 32).toFixed(1)}&#8457;</h1>
                <Row className=" mt-1 ">
                  <h3>{currentForcast.temp2m}&#8451;</h3>
                  <h5>Humidity: {currentForcast.rh2m}</h5>
                </Row>
              </Row>

              <Row className="mx-3 mb-4 text-start border-bottom border-white">
                <h3> Wind <span><Wind /></span></h3>
                <h3>Speed: {windSpeed(windspeed)} </h3>
                <Row className=" mt-1 ">
                  <h4>Direction: {windDirection} </h4>
                  <h4>Lifted Index: {currentForcast.lifted_index} </h4>
                </Row>
              </Row>

              <Row className="mx-3 pb-4 text-end">
                <h3> <span><CloudDrizzleFill /></span> Percipitation </h3>
                <h2 className="text-capitalize">{currentForcast.prec_type}</h2>
                <Row className=" mt-1 mx-0">
                  <h4>Amount: {percipitationAmount(currentForcast.prec_amount)}</h4>
                  <h4>Cloud Coverage: {cloudCoverage(currentForcast.cloudcover)}</h4>
                </Row>
              </Row>
            </Col>



            <Row className="d-md-none py-4 text-white border-top border-white">
              <Row className="py-4 text-center">
                <h3>12 Hour Forecast</h3>
              </Row>
              <Carousel controls={false} indicators={false} slide interval={3000}>
                <Carousel.Item className="flex-column">
                  <Row className="text-center pb-3">
                    <h5>3 Hours From Now</h5>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <EightHourCard hourForecast={threeHour} />
                  </Row>
                </Carousel.Item>

                <Carousel.Item className="flex-column">
                  <Row className="text-center pb-3">
                    <h5>6 Hours From Now</h5>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <EightHourCard hourForecast={sixHour} />
                  </Row>
                </Carousel.Item>

                <Carousel.Item className="flex-column">
                  <Row className="text-center pb-3">
                    <h5>9 Hours From Now</h5>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <EightHourCard hourForecast={nineHour} />
                  </Row>
                </Carousel.Item>

                <Carousel.Item className="flex-column">
                  <Row className="text-center pb-3">
                    <h5>12 Hours From Now</h5>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <EightHourCard hourForecast={twelveHour} />
                  </Row>
                </Carousel.Item>

              </Carousel>
            </Row>


            <Col md={9} className="d-none d-md-block">
              <Row className="mx-3 my-4 text-center">
                <Col md={12}>
                  <h1 className="text-uppercase fw-bold font-monospace text-decoration-underline">Look Ahead</h1>
                  <Row className="mx-3 my-4 text-center">
                    <h3>The Next 12 Hours</h3>
                  </Row>
                </Col>
              </Row >
              <Row className=" mb-3 mt-1 text-center">
                <Col className="border-end border-white mb-2" md={3}>
                  <h4>3 Hours</h4>
                  <Row className="d-flex justify-content-center mt-4" >
                    <EightHourCard hourForecast={threeHour} />
                  </Row>
                </Col>
                <Col className="border-end border-white mb-2" md={3}>
                  <h4>6 Hours</h4>
                  <Row className="d-flex justify-content-center mt-4">
                    <EightHourCard hourForecast={sixHour} />
                  </Row>
                </Col>
                <Col className="border-end border-white mb-2" md={3}>
                  <h4>9 Hours</h4>
                  <Row className="d-flex justify-content-center mt-4">
                    <EightHourCard hourForecast={nineHour} />
                  </Row>
                </Col>
                <Col md={3}>
                  <h4>12 Hours</h4>
                  <Row className="d-flex justify-content-center mt-4 mb-2">
                    <EightHourCard hourForecast={twelveHour} />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default Home;