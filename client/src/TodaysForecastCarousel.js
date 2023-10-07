import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EightHourCard from './EightHourCard';
import Carousel from 'react-bootstrap/Carousel';


function TodaysForecastCarousel({ loading, todaysWeather }) {

    return (
        <>
            <Col md={3} className="d-md-none justify-content-center py-4 ps-1 text-white border-top border-white">
                <Row className="py-4 text-center">
                    <h3>12 Hour Forecast</h3>
                </Row>

                <Carousel controls={false} indicators={false} slide interval={4000}>


                    {todaysWeather.map((element, index) => {

                        if (index > 2 && index < 7) {

                            return (

                                <Carousel.Item key={index}className="flex-column">
                                    <Row className="text-center pb-3">
                                        <h5>{(index - 2) * 3} Hours From Now</h5>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <EightHourCard loading={loading} hourForecast={element} />
                                    </Row>
                                </Carousel.Item>)
                        }
                        else {return null}
                    })}
                </Carousel>

            </Col>
        </>
    )
}

export default TodaysForecastCarousel;