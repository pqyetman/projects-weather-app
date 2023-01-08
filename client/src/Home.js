import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Umbrella, BarChart, CloudDrizzleFill, GraphUp, CalendarDateFill, Gear, BoxArrowLeft, Search, ThermometerHalf, Wind, CloudMoon, CloudSun } from 'react-bootstrap-icons'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import EightHourCard from './EightHourCard';



function Home({ lng, lat, forecast }) {

  const [todayForcast, setTodayForcast] = useState([])


  let today = new Date()
  let date = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()

  useEffect(() => {

    if (lng & lat) {
      console.log(`Longitude and Lattitude are : ${lng}, ${lat}`);
      console.log(`${date}`)
      fetch(`${forecast}`).then(r => r.json()).then(d => setTodayForcast(d.properties.periods.filter(period => period.startTime.includes(`${date}`))))
    }

    else {
      console.log("Longitude and Lattitude are no good")
    }

  }, [forecast]);

  // const mapTodayForcast = todayForcast.map((hour, index) => <Card.Img style={{ width: "100px", height: "100px", margin: "1rem auto", padding: "0", bg: "primary", }} variant="top" key={index} src={hour.icon} />)


  //styling componetents





  return (
    <>
      <Container fluid className ="m-0 p-0"
            >
        <Col md={12} className="text-white"
                style={{  
                  backgroundImage: `url("seabackground.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  opacity: "0.8",               
                  height: "100%",
                  width: "100vw"
                }}>

          <Row >
            <Col md={3} className="border-end border-white border-2 rounded-end px-2" style={{ height: "100vh" }}>

              <Row className="mb-3 mt-4 mx-3" >
                <InputGroup className=" bg-transparent">
                  <Form.Control className="  bg-transparent border-top-0 border-start-0 border-end-0 text-white border-2 border-white"
                    placeholder="Search for a city..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text className="bg-transparent text-white  border-top-0 border-start-0 border-end-0 border-white" id="basic-addon1"><Search /></InputGroup.Text>
                </InputGroup>
              </Row >
              <Row style={{ height: "7vh" }} >

              </Row>
              <Row className=" mx-2 mb-4 border-bottom border-white">
                <h2 className="text-center text-uppercase fw-bold font-monospace ">City, State, Country</h2>
              </Row>
              <Row className=" mx-3 mb-3 text-end border-bottom border-white">
                <h3><span><ThermometerHalf /></span>Current Temp. </h3>
                <h1>20&#8451;</h1>
                <Row className=" mt-1 ">
                  <h4>Max: 20&#8451;</h4>
                  <h4>Min: 20&#8451;</h4>
                </Row>
              </Row>

              <Row className=" mx-3 mb-4 text-start border-bottom border-white">
                <h3> Wind Speed <span><Wind /></span></h3>
                <h1>20&#8451;</h1>
                <Row className=" mt-1 ">
                  <h4>Max: 20&#8451;</h4>
                  <h4>Min: 20&#8451;</h4>
                </Row>
              </Row>

              <Row className=" mx-3 text-end">
                <h3> <span><CloudDrizzleFill /></span> Percipitation </h3>
                <h1>20&#8451;</h1>
                <Row className=" mt-1 ">
                  <h4>Max: 20&#8451;</h4>
                  <h4>Min: 20&#8451;</h4>
                </Row>
              </Row>
            </Col>


            <Col md={9} style={{ height: "100vh" }}>
              <Row className=" mx-3 my-3 text-center">
                <Col md={12}>
                  <h1 className="text-uppercase fw-bold font-monospace text-decoration-underline">The Next 8 Hours</h1>
                </Col>
              </Row >
              <Row style={{ height: "7vh" }}>

              </Row>
              <Row style={{ height: "60vh" }} className=" mb-3 mt-1 text-center">
                <Col className="border-end border-white mb-2" md={3}>
                  <h4>Time</h4>
                  <Row className="d-flex justify-content-center mt-4" >
                    <EightHourCard />
                  </Row>
                </Col>
                <Col className="border-end border-white mb-2" md={3}>
                  <h4>Time</h4>
                  <Row className="d-flex justify-content-center mt-4">
                    <EightHourCard />
                  </Row>
                </Col>
                <Col className="border-end border-white mb-2" md={3}>
                  <h4>Time</h4>
                  <Row className="d-flex justify-content-center mt-4">
                    <EightHourCard />
                  </Row>
                </Col>
                <Col md={3}>
                  <h4>Time</h4>
                  <Row className="d-flex justify-content-center mt-4 mb-2">
                    <EightHourCard />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default Home;