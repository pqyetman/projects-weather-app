import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchCityBar from './SearchCityBar';
import FutureForecastCarousel from './FutureForecastCarousel';
import { statCloudCover, statHumidity, statPrec, statLiftedIndex, statTemp } from './WeatherDataFunctions'
import PlaceHolder from './PlaceHolder';
import FutureForcastCarouselStat from './FutureForecastCarouselStat';
import FutureForecastStat from './FutureForecastStat';


function FutureForcast({ futureWeather, todaysWeather, loading, location, setCoords }) {

  const cloudData = statCloudCover(todaysWeather)
  const humidityData = statHumidity(todaysWeather)
  const precData = statPrec(todaysWeather)
  const liftedIndexData = statLiftedIndex(todaysWeather)
  const tempData = statTemp(todaysWeather)


  return (
    <Container fluid >
      <Row>
        <Col md={12} className="text-center text-white ">
          <Row className="mt-2 justify-content-center justify-content-md-start">
            <Col md={4} xs={8} lg={3} className="d-block d-md-inline ms-2" >
              <SearchCityBar setCoords={setCoords} />
            </Col>
            <Row className="pt-5 pt-md-2">
              <h2>{loading || location === false ? <PlaceHolder /> : location}</h2>
            </Row>
          </Row>
          <Row className="mt-4 py-4">
            <Col md={12}>
              <h3 className="text-center text-white"><u>Weekly Statistics</u></h3>
            </Col>
          </Row >

          <FutureForcastCarouselStat
            loading={loading}
            cloudData={cloudData}
            humidityData={humidityData}
            precData={precData}
            liftedIndexData={liftedIndexData}
            tempData={tempData}
          />

          <FutureForecastStat
            loading={loading}
            cloudData={cloudData}
            humidityData={humidityData}
            precData={precData}
            liftedIndexData={liftedIndexData}
            tempData={tempData}
          />

          <Row className="py-5 mt-4">
            <Col md={12}>
              <h3 className="text-center text-white"><u>Daily Forecast</u></h3>
            </Col>
          </Row>

          <Row >
            <Col md={12}>
              <FutureForecastCarousel 
              futureWeather={futureWeather} 
              loading={loading} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FutureForcast;