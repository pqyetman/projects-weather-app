import { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Umbrella, BarChart, GraphUp, CalendarDateFill, Gear, BoxArrowLeft, Search, Thermometer, Wind, CloudMoon, CloudSun } from 'react-bootstrap-icons'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"



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

      <Row >


        <Col className="me-1" md={1} style={{ backgroundColor: "lightblue", height: "100vh" }}>
          <Col style={{ backgroundColor: "lightgrey", height: "100vh", width: "7vw" }}>
            <Stack >
              <div className="mb-5 mt-4 align-self-center" >
                <Umbrella color="black" size={32} />
              </div>
            </Stack>
            <Stack gap={4}>
              <div className="p-1 border border-dark rounded align-self-center">
                <BarChart color="black" size={32} />
              </div>
              <div className="p-1 border border-dark rounded align-self-center">
                <GraphUp color="black" size={32} />
              </div>
              <div className="p-1 border border-dark rounded align-self-center">
                <CalendarDateFill color="black" size={32} />
              </div>
              <div className="p-1 border border-dark rounded align-self-center">
                <Gear color="black" size={32} />
              </div>
            </Stack>
            <Stack className="mt-5">
              <div style={{ height: "40vh" }}></div>
              <div className="mt-5 p-1 border border-dark rounded align-self-center ">
                <BoxArrowLeft color="black" size={32} />
              </div>
            </Stack>
          </Col>
        </Col>


        <Col className="mx-auto" md={7} style={{ backgroundColor: "red", height: "100vh" }}>
          <Row >
            <Col md={1} className="mx-1 ps-1 mt-4">
              <div
                style={{
                  width: "75px",
                  height: "75px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "100% 50%"
                }}>
                <Image src="https://pyxis.nymag.com/v1/imgs/7ef/318/1f9e413ceae772d67cdb60123bcb2897fe-26-south-park-2201.rhorizontal.w700.jpg" className="rounded" />
              </div>
            </Col>
            <Col md={5} className="mx-1 mt-4">
              <h1 style={{ color: "blue" }}>Hello,</h1>
              <h1 style={{ color: "blue" }}>Randy Marsh</h1>
            </Col>
            <Col md={5} className="mx-1">
              <InputGroup className="mb-3 mt-4">
                <Form.Control
                  placeholder="Search anything..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>

          <Row className=" my-2 ">
            <Col md={6} style={{ backgroundColor: "white" }} className=" d-flex justify-content-center ">
              <Card style={{ width: '32rem', height: "22rem" }} className="my-2 text-black img-fluid">
                <Card.Img variant="top" src="/blueSky.jpg" style={{ width: '100%', overflow: "hidden" }} />
                <Card.Body className="card-img-overlay">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 ">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} style={{ backgroundColor: "white" }} className=" d-flex justify-content-center  ">
              <Card style={{ width: '32rem', height: "22rem" }} className="my-2 text-black img-fluid">
                <Card.Img variant="top" src="Kite.jpg" style={{ width: '100%', overflow: "hidden" }} />
                <Card.Body className="card-img-overlay">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col md={8} >
              <Row >
                <Col md={9} >
                  <h1>How's the </h1>
                  <h1>Temperature Today?</h1>
                </Col>
                <Col md={3} className=" d-flex justify-content-end mt-1 ">
                  <Button variant="outline-warning" className=" mx-1 " style={{ width: "3rem", height: "3rem" }}><Thermometer color="grey" size={20} /></Button>
                  <Button variant="outline-warning" className=" mx-1 " style={{ width: "3rem", height: "3rem" }}><Umbrella color="grey" size={20} /></Button>
                  <Button variant="outline-warning" className=" ms-1 " style={{ width: "3rem", height: "3rem" }}><Wind color="grey" size={20} /></Button>
                </Col>
              </Row>
              <Row className="mt-2" >
                <Col className="d-flex justify-content-center mt-4 border-end" md={3} >
                  <div className="border rounded-circle">
                    <CloudSun size={50} className="p-2" />
                  </div>
                </Col>
                <Col className="d-flex justify-content-center mt-4 border-end" md={3} >
                  <div className="border rounded-circle">
                    <CloudMoon size={50} className="px-2" />
                  </div>
                </Col>
                <Col className="d-flex justify-content-center mt-4 border-end" md={3} >
                  <div className="border rounded-circle">
                    <CloudSun size={50} className="p-2" />
                  </div>
                </Col>
                <Col className="d-flex justify-content-center mt-4 " md={3} >
                  <div className="border rounded-circle">
                    <CloudMoon size={50} className="p-2" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="d-flex justify-content-center mt-0 py-3 border-end">
                  <h3>25&#8451;</h3>
                </Col>
                <Col md={3} className="d-flex justify-content-center mt-0 py-3 border-end">
                  <h3>25&#8451;</h3>
                </Col>
                <Col md={3} className="d-flex justify-content-center mt-0 py-3 border-end">
                  <h3>25&#8451;</h3>
                </Col>
                <Col md={3} className="d-flex justify-content-center mt-0 py-3">
                  <h3>25&#8451;</h3>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="d-flex justify-content-center mt-0 pt-0 border-end">
                  <h6>Morning</h6>
                </Col>
                <Col md={3} className="d-flex justify-content-center mt-0 pt-0 border-end">
                  <h6>Afternoon</h6>
                </Col>
                <Col md={3} className="d-flex justify-content-center mt-0 pt-0 border-end">
                  <h6>Evening</h6>
                </Col>
                <Col md={3} className="d-flex justify-content-center mt-0 pt-0">
                  <h6>Night</h6>
                </Col>
              </Row>
            </Col>
            <Col md={4} className=" d-flex justify-content-center ">
              <Card style={{ width: '25rem', height: "20rem" }} className="my-2 text-black img-fluid">
                <Card.Img variant="top" src="business-man-standing-holding-umbrella_51635-3472.jpg" style={{ width: '100%', overflow: "hidden" }} />
                <Card.Body className="card-img-overlay ms-2">
                  <Card.Title>Tomorrow</Card.Title>
                  <Card.Subtitle className="my-2">Temperature</Card.Subtitle>
                  <Card.Text className="my-4">
                    <h1>20 &#8451;</h1>
                  </Card.Text>
                </Card.Body>
              </Card>


            </Col>
          </Row>

        </Col>

        <Col className="mx-auto" md={3} style={{ backgroundColor: "orange", height: "100vh" }}>
          <Row className="mt-4 ms-2">
            <Col md={9}>
              <Row >
                <h4>Sunday</h4>
              </Row>
              <Row className="ms-0 mt-1" style={{ width: "80%"}}>
                <Form.Select size="sm" aria-label="Default select example">
                  <option>Baton, Indonesia</option>
                  <option value="1">New York, New York</option>
                  <option value="2">London, England</option>
                  <option value="3">Paris, France</option>
                </Form.Select>
              </Row>

            </Col>
            <Col md={3}>
              <h2>20 &#8451;</h2>
            </Col>
          </Row>
          <hr/>



        </Col>
      </Row >

    </>
  );
}

export default Home;