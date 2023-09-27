import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EightHourCard from './EightHourCard';

function TodaysForecastCards({ loading, todaysWeather }) {



    return (
        <>

            <Col md={9} className="d-none d-md-block">
                <Row className="mx-3 my-4 text-center">
                    <Col md={12}>
                        <h1 className="text-uppercase fw-bold font-monospace text-decoration-underline">Look Ahead</h1>
                        <Row className="mx-3 my-4 text-center">
                            <h3>The Next 12 Hours</h3>
                        </Row>
                    </Col>
                </Row >
                <Row className="mb-3 mt-1 text-center">

                    {todaysWeather.map((element, index) => {
                   
                        if (index > 2 && index < 7) {

                           return (

                                <Col key={index} className="border-end border-white mb-2" md={3}>
                                    <h4>{(index-2)*3} Hours</h4>
                                    <Row className="d-flex justify-content-center mt-4" >
                                        <EightHourCard loading={loading} hourForecast={element} />
                                    </Row>
                                </Col>)
                        }
                    })}

                </Row>
            </Col>
        </>
    )
}

export default TodaysForecastCards;