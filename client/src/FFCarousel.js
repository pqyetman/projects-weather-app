import Carousel from 'react-bootstrap/Carousel';
import FFCard from './FFCard';
import Row from 'react-bootstrap/Row';
import { useState, useEffect, useContext } from 'react';
import LocContext from './store/loc-context'

function FFCarousel({ loading }) {

    const ctx = useContext(LocContext)

    const [dayTwo, setDayTwo] = useState("");
    const [dayThree, setDayThree] = useState("");
    const [dayFour, setDayFour] = useState("");
    const [dayFive, setDayFive] = useState("");
    const [daySix, setDaySix] = useState("");
    const [daySeven, setDaySeven] = useState("");

    useEffect(() => {

        if(!loading){

            setDayTwo(ctx.weeklyForcast[1])
            setDayThree(ctx.weeklyForcast[2])
            setDayFour(ctx.weeklyForcast[3])
            setDayFive(ctx.weeklyForcast[4])
            setDaySix(ctx.weeklyForcast[5])
            setDaySeven(ctx.weeklyForcast[6])

        }


    }, [ctx.weeklyForcast, loading]);

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