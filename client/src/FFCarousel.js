import Carousel from 'react-bootstrap/Carousel';
import FFCard from './FFCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

function FFCarousel({weeklyForcast, lng, lat}) {

   
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
            <Carousel fade>
                <Carousel.Item>
                    <Row className="d-flex justify-content-evenly mb-5">
                        <FFCard dailyForcast ={dayTwo}/>
                        <FFCard dailyForcast ={dayThree}/>
                        <FFCard dailyForcast ={dayFour}/>
                    </Row>                
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="d-flex justify-content-evenly mb-5">
                        <FFCard dailyForcast ={dayFive}/>
                        <FFCard dailyForcast ={daySix}/>
                        <FFCard dailyForcast ={daySeven}/>
                    </Row>                
                </Carousel.Item>
            </Carousel >
        </>
    );
}

export default FFCarousel;