import Carousel from 'react-bootstrap/Carousel';
import FFCard from './FFCard';
import Row from 'react-bootstrap/Row';


function FutureForecastCarousel({ loading, futureWeather }) {

    const cardArray = futureWeather.map((element, index) => index > 0 && index < 7 ? <FFCard key={index} dailyForcast={element} loading={loading} /> : null)




    return (
        <>
            <Carousel indicators={false} slide className="py-4 my-2 d-none d-md-block ">
                <Carousel.Item >
                    <Row className="  justify-content-evenly mb-5">
                        {cardArray.slice(0, 4)}
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row className=" justify-content-evenly mb-5">
                        {cardArray.slice(4)}
                    </Row>
                </Carousel.Item>
            </Carousel >

            <Carousel indicators={false} slide className="py-4 my-2 d-block d-md-none ">

                {futureWeather.map((element, index) => {

                    if (index > 0 && index < 7) {

                        return (

                            <Carousel.Item key={index}>
                                <Row className=" justify-content-center mb-5">
                                    <FFCard dailyForcast={element} loading={loading} />
                                </Row>
                            </Carousel.Item>

                        )
                    }

                    else { return null }

                })}

            </Carousel >
        </>
    );
}

export default FutureForecastCarousel;