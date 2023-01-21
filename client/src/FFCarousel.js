import Carousel from 'react-bootstrap/Carousel';
import FFCard from './FFCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

function FFCarousel({ weeklyForcast, lng, lat }) {


    const [dayTwo, setDayTwo] = useState("");
    const [dayThree, setDayThree] = useState("");
    const [dayFour, setDayFour] = useState("");
    const [dayFive, setDayFive] = useState("");
    const [daySix, setDaySix] = useState("");
    const [daySeven, setDaySeven] = useState("");

    useEffect(() => {



        if (typeof lng === "string" & typeof lat === "string") {
            console.log(`Longitude and Lattitude are : ${lng}, ${lat}`);

            setDayTwo(weeklyForcast[1])
            setDayThree(weeklyForcast[2])
            setDayFour(weeklyForcast[3])
            setDayFive(weeklyForcast[4])
            setDaySix(weeklyForcast[5])
            setDaySeven(weeklyForcast[6])

        }

        else {
            console.log("Longitude and Lattitude are no good")
        }


    }, [weeklyForcast]);

    return (
        <>
            <Carousel indicators={false} slide className="py-4 my-2 d-none d-md-block ">
                <Carousel.Item >
                    <Row className="  justify-content-evenly mb-5">
                        <FFCard dailyForcast={dayTwo} />
                        <FFCard dailyForcast={dayThree} />
                        <FFCard dailyForcast={dayFour} />
                    </Row>
                </Carousel.Item>


                <Carousel.Item>
                    <Row className=" justify-content-evenly mb-5">
                        <FFCard dailyForcast={dayFive} />
                        <FFCard dailyForcast={daySix} />
                        <FFCard dailyForcast={daySeven} />
                    </Row>
                </Carousel.Item>              
            </Carousel >

            <Carousel indicators={false} slide className="py-4 my-2 d-block d-md-none ">
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                        <FFCard dailyForcast={dayTwo} />                       
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={dayThree} />                     
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={dayFour} />                      
                    </Row>
                </Carousel.Item>
              
                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={dayFive} />                    
                    </Row>
                </Carousel.Item>

                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                    <FFCard dailyForcast={daySix} />                    
                    </Row>
                </Carousel.Item>

                <Carousel.Item >
                    <Row className=" justify-content-center mb-5">
                                     
                    <FFCard dailyForcast={daySeven} />                   
                    </Row>
                </Carousel.Item>                     
            
            </Carousel >
        </>
    );
}

export default FFCarousel;