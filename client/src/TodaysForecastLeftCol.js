import SearchCityBar from './SearchCityBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CloudDrizzleFill, ThermometerHalf, Wind } from 'react-bootstrap-icons'
import PlaceHolder from './PlaceHolder';
import { calcWindSpeed, cloudCoverage, percipitationAmount, filterWeatherString } from './WeatherDataFunctions';

function TodaysForecastLeftCol({ location, setCoords, setLocation, loading, currentForcast, windSpeed, windDirection }) {

    return (
        <>
            <Col md={3} className="border-end border-white border-2 rounded-end pb-4" >
                <Row className="mb-3 mt-4 mx-3 pb-4" >
                    <SearchCityBar setCoords={setCoords} setLocation={setLocation} />
                </Row >
                <Row className=" mx-2 my-4 pt-4 border-bottom border-white">
                    <h2 className="text-center text-uppercase fw-bold font-monospace ">
                        {loading || location === false ? <PlaceHolder /> : location}</h2>
                </Row>
                <Row className=" mx-2 mb-4 border-bottom border-white">
                    <h4 className="text-center text-uppercase fw-bold">Date: {new Date().toLocaleDateString()}</h4>
                    <h5 className="text-center ">Current Forecast: {loading ? <PlaceHolder /> : filterWeatherString(currentForcast.weather)}</h5>
                </Row>
                <Row className=" mx-3 mb-3 text-end border-bottom border-white">
                    <h3><span><ThermometerHalf /></span>Current Temp. </h3>
                    <h1>{loading ? <PlaceHolder /> : (parseFloat(currentForcast.temp2m) * 9 / 5 + 32).toFixed(1)}&#8457;</h1>
                    <Row className=" mt-1 ">
                        <h3>{loading ? <PlaceHolder /> : currentForcast.temp2m}&#8451;</h3>
                        <h5>Humidity: {loading ? <PlaceHolder /> : currentForcast.rh2m}</h5>
                    </Row>
                </Row>

                <Row className="mx-3 mb-4 text-start border-bottom border-white">
                    <h3> Wind <span><Wind /></span></h3>
                    <h3>Speed: {loading ? <PlaceHolder /> : calcWindSpeed(windSpeed)} </h3>
                    <Row className=" mt-1 ">
                        <h4>Direction: {loading ? <PlaceHolder /> : windDirection} </h4>
                        <h4>Lifted Index: {loading ? <PlaceHolder /> : currentForcast.lifted_index} </h4>
                    </Row>
                </Row>

                <Row className="mx-3 pb-4 text-end">
                    <h3> <span><CloudDrizzleFill /></span> Percipitation </h3>
                    <h2 className="text-capitalize">{loading ? <PlaceHolder /> : currentForcast.prec_type}</h2>
                    <Row className=" mt-1 mx-0">
                        <h4>Amount: {loading ? <PlaceHolder /> : percipitationAmount(currentForcast.prec_amount)}</h4>
                        <h4>Cloud Coverage: {loading ? <PlaceHolder /> : cloudCoverage(currentForcast.cloudcover)}</h4>
                    </Row>
                </Row>
            </Col>
        </>
    )
}

export default TodaysForecastLeftCol