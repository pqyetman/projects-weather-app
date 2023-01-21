import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';






function About() {
  return (
    <Container fluid className="m-0 px-2 text-white"  >
      
      <Row className="my-5 text-center">
        <Col md={12}>
          <h1>-About-</h1>
        </Col>
      </Row>
      <Row className="my-4 text-center ">
        <Col md={12}>
          <h3><u>Components</u></h3>
        </Col>
      </Row>
      <Row className="my-2 px-2 text-center justify-content-evenly ">
        <Col md={2} className="pb-2" >
          <h5>React</h5>
          <p>React and React Router were used to create this application.
            There is a Ruby Rails backend; however, it is currently not being used other than a fallback controller for React Router.
            At some point in the future I would like to set up accounts and have a an email system to send daily forcast emails.
            You can find the code for this application <a className=" text-info" href="https://github.com/pqyetman/projects-weather-app">here</a></p>
        </Col>
        <Col md={2} className="pb-2">
          <h5>Bootstap/React Bootsrap</h5>
          <p>I used the bootstrap/react-boostrap for the css framework.
            This my second project using it, but first time creating an application after watching
            this <a className=" text-info" href="https://www.udemy.com/course/the-complete-bootstrap-5-course-for-beginners-step-by-step/">course</a> on
            udemy. This application is stil not "mobile freindly",
            but that is the next thing I will be working on. </p>
        </Col>
        <Col md={2} className="pb-2">
          <h5>7 Timer API</h5>
          <p>The <a className=" text-info" href="http://www.7timer.info/doc.php?lang=en#meteo">7timer API</a> was used to populate the data.
            I mainly used this API because it didn't require an API key. That wound up not mattering as
            I needed to use an API key for Google GeoCode (7timer API requires a Longitude and
            Latitude in the fetch). I used the Civil and Civil Light data sets to populate the data for the
            application. I wanted to use the two-week data as well, but it was not always reliable.</p>
        </Col>
        <Col md={2} className="pb-2">
          <h5>Other Libraries</h5>
          <p>As previously mentioned, Google's <a className=" text-info" href="https://developers.google.com/maps/documentation/geocoding/overview"> Geocode API </a> was
            used for the location search bar and to pull the longitude and lattitude from the results.
            The application requires you to allow the browser to access your location and use those coordinates for the intial data fetch.
            React router brings you intially to the about page, so while you are reading it, the fetch should pull and load the data in state.</p>
        </Col>
      </Row>
      <Row className="my-4 text-center">
        <Col md={12}>
          <h3><u>Process</u></h3>
        </Col>
      </Row>
      <Row className="mt-2 px-2 text-center justify-content-evenly">
        <Col md={2} className="pb-2">
          <h5>Build Out Front End</h5>
          <p>The first aspect of the front end was selecting a <a className="text-info"  href="https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI">design</a> that
            I liked. Although the design strayed from the original template it was extremely helpful in keeping the stucture the same.
          </p>
        </Col>
        <Col md={2} className="pb-2">
          <h5>Use Geolocation and Google API</h5>
          <p>Initially upon arriving at the site you are asked to allow access to your location.
            This pulls the longitude and latitude from your computer and passes it to the API fetch. If no longitude and lattitude
            are found the application will attempt to redetermine your location from your browser. I had some fun with the
            data I got back from the google API. Some of the string values had types of false, this took me a while to trouble,
            but I eventually able to figure out a solution.
          </p>
        </Col>
        <Col md={2} className="pb-2">
          <h5>Apply 7 Timer API</h5>
          <p>Both the Civil and Civil Light portions of the 7Timer API have up to a week of data.
            I used the Civil Light version for the daily forcast in the future forcast portion as it was easier than trying to
            break up the Civil data correctly I did use the Civil data to calculate the
            statistical data for the future forcast and Today's forcast.
            Overall the data was easy to parse through, although undestanding the that time was always in GMT was not initially obvious.
          </p>
        </Col>
        <Col md={2} className="pb-2" >
          <h5>Things Learned/Areas To Improve</h5>
          <ListGroup className="text-start"variant="flush">
            <ListGroup.Item className = "bg-transparent text-white fst-italic">Strings can be false</ListGroup.Item>
            <ListGroup.Item className = "bg-transparent text-white fst-italic">React Router causes a rerender unless you use useHistory</ListGroup.Item>
            <ListGroup.Item className = "bg-transparent text-white fst-italic">Need to make this mobile friendly</ListGroup.Item>
            <ListGroup.Item className = "bg-transparent text-white fst-italic">Create a backend account component with email options</ListGroup.Item>
            <ListGroup.Item className = "bg-transparent text-white fst-italic">Research a historical weather data API</ListGroup.Item>
            <ListGroup.Item className = "bg-transparent text-white fst-italic">Add an option to let the computer know your location if you say no, afterwards</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container >

  );
}

export default About;