
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { percipitationAmount, cloudCoverage } from './WeatherDataFunctions';
import PlaceHolder from './PlaceHolder';



function FutureForecastStat({ loading, cloudData, humidityData, precData, liftedIndexData, tempData }) {

    return (<>
        <Row className="mt-2 d-none d-md-flex justify-content-center  ">
            <Col md={2} className="bg-transparent text-white border-end border-start border-white">
                <Row >
                    <h4 className="text-center">Cloud Coverage</h4>
                </Row>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size={6} /> : cloudCoverage(cloudData[0])}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size={6} /> : cloudCoverage(cloudData[1])}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size={6} /> : cloudCoverage(cloudData[2])}</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
                <Row >
                    <h4 className="text-center">Lifted Index</h4>
                </Row>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size={6} /> : liftedIndexData[0]} </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Average:  {loading ? <PlaceHolder size={6} /> : liftedIndexData[1]}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Minimum:  {loading ? <PlaceHolder size={6} /> : liftedIndexData[2]}</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
                <Row >
                    <h4 className="text-center">Temperature</h4>
                </Row>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size={6} /> : tempData[0]}&#8451; | {loading ? <PlaceHolder size={6} /> : (parseFloat(tempData[0]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size={6} /> : tempData[1]}&#8451; | {loading ? <PlaceHolder size={6} /> : (parseFloat(tempData[1]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size={6} /> : tempData[2]}&#8451;  | {loading ? <PlaceHolder size={6} /> : (parseFloat(tempData[2]) * 9 / 5 + 32).toFixed(1)} &#8457;</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
                <Row >
                    <h4 className="text-center">Percipitation Amount</h4>
                </Row>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size={6} /> : percipitationAmount(precData[0])}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size={6} /> : percipitationAmount(precData[1])}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size={6} /> : percipitationAmount(precData[2])}</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={2} className="bg-transparent text-white border-end border-white">
                <Row >
                    <h4 className="text-center">Humidty</h4>
                </Row>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item className="bg-transparent border-white text-white">Maximum: {loading ? <PlaceHolder size={6} /> : humidityData[0]}%</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Average: {loading ? <PlaceHolder size={6} /> : humidityData[1]}%</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-white text-white">Minimum: {loading ? <PlaceHolder size={6} /> : humidityData[2]}%</ListGroup.Item>
                </ListGroup>
            </Col>

        </Row>
    </>)
}

export default FutureForecastStat