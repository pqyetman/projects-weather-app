import Carousel from 'react-bootstrap/Carousel';
import FFCard from './FFCard';
import Row from 'react-bootstrap/Row';


function FFCarousel({ loading, futureWeather }) {


    const dayTwo = futureWeather[1] 
    const dayThree = futureWeather[2] 
    const dayFour = futureWeather[3] 
    const dayFive = futureWeather[4] 
    const daySix = futureWeather[5] 
    const daySeven = futureWeather[6] 

    return (
        <>
            <Carousel indicators={false} slide className="py-4 my-2 d-none d-md-block ">
                <Carousel.Item >
                    <Row className="  justify-content-evenly mb-5">
                        <FFCard dailyForcast={dayTwo} loading={loading}/>
                        <FFCard dailyForcast={dayThree} loading={loading} />
                        <FFCard dailyForcast={dayFour} loading={loading} />
                    </Row>
                </Carousel.Item>


                <Carousel.Item>
                    <Row className=" justify-content-evenly mb-5">
                        <FFCard dailyForcast={dayFive} loading={loading} />
                        <FFCard dailyForcast={daySix} loading={loading} />
                        <FFCard dailyForcast={daySeven} loading={loading} />
                    </Row>
                </Carousel.Item>              
            </Carousel >

            <Carousel indicators={false} slide className="py-4 my-2 d-block d-md-none ">
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                        <FFCard dailyForcast={dayTwo} loading={loading}/>                       
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={dayThree} loading={loading}/>                     
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={dayFour} loading={loading}/>                      
                    </Row>
                </Carousel.Item>
              
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={dayFive} loading={loading}/>                    
                    </Row>
                </Carousel.Item>

                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={daySix} loading={loading}/>                    
                    </Row>
                </Carousel.Item>

                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                                     
                    <FFCard dailyForcast={daySeven} loading={loading}/>                   
                    </Row>
                </Carousel.Item>                     
            
            </Carousel >
        </>
    );
}

export default FFCarousel;