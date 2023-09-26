import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import AboutRow from "./AboutRow";

function About() {
  return (
    <Container fluid className="m-0 px-2 text-white">
      <Row className="my-5 text-center">
        <Col md={12}>
          <h1>~About~</h1>
        </Col>
      </Row>
      <Row className="my-4 text-center ">
        <Col md={12}>
          <h3>
            <u>Components</u>
          </h3>
        </Col>
      </Row>
      <Row className="my-2 px-2 text-center justify-content-evenly ">
        <AboutRow
          title={"React"}
          linkcontent={"here"}
          link={"https://github.com/pqyetman/projects-weather-app"}
        >
          React and React Router were used to create this application. There is
          a Ruby on Rails backend; however, it is currently not being used other
          than a fallback controller for React Router. At some point in the
          future I would like to set up accounts and have an email system to
          send daily forcast emails. You can find the code for this application
        </AboutRow>
        <AboutRow
          title={"Bootstrap/React Bootstrap"}
          linkcontent={"course"}
          link={
            "https://www.udemy.com/course/the-complete-bootstrap-5-course-for-beginners-step-by-step/"
          }
        >
          I used bootstrap/react-bootstrap to style this app. This is my second
          project using the framework, but my first time creating an application
          that was mobile friendly after watching this
        </AboutRow>
        <AboutRow
          title={"7Timer API"}
          linkcontent={"here"}
          link={"http://www.7timer.info/doc.php?lang=en#meteo"}
        >
          The 7timer API was used to produce the weather data. I used the Civil
          Light and Civil data options for today's weather section and the
          future weather section. I am currently looking for another free API
          for the historical weather data. The 7timer API can be found
        </AboutRow>

        <AboutRow
          title={"Other Libraries"}
          linkcontent={"here"}
          link={
            "https://developers.google.com/maps/documentation/geocoding/overview"
          }
        >
          The Geocode API was then used for the location search bar to pull the
          longitude and lattitude from the results and pass them to the 7Timer
          API. The Geocode API can be found
        </AboutRow>
      </Row>
      <Row className="my-4 text-center">
        <Col md={12}>
          <h3>
            <u>Process</u>
          </h3>
        </Col>
      </Row>
      <Row className="mt-2 px-2 text-center justify-content-evenly">
        <AboutRow
          title={"Selecting A Design"}
          linkcontent={"here"}
          link={
            "https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI"
          }
        >
          The first thing I did for this project was select a design that I
          liked. Although the end product eventually strayed from the original
          template it was extremely helpful with keeping the stucture and layout
          the same. The link for the design can be found
        </AboutRow>
        <AboutRow title={"Geolocation and Google API"}>
          Upon arriving at the site you are asked to allow access to your
          location in order to use those coordinates to fetch the weather data
          in your area. If you decline the default is set to NYC. This is only
          performed when the application initially mounts, to avoid being asked
          over and over again. After realizing that a lot of people would
          probably prefer not to give their coordinates, I had to seek out a
          user friendly way to generate longitude and latitude coordinates.
          That's why I used the geocode API.
        </AboutRow>
        <AboutRow title={"Incorporating the 7Timer API"}>
          Both the Civil and Civil Light portions of the 7Timer API have up to a
          week of data. The Civil version contains more data points. The data
          was easy to parse through, and the only set back was undestanding the
          that time being displayed for each longitude and latitude was always
          in GMT. This was not initially clear.
        </AboutRow>
        <AboutRow title={"Things Learned/Areas To Improve"}>
          <ListGroup className="text-start" variant="flush">
            <ListGroup.Item className="bg-transparent text-white fst-italic">
              Strings can be false
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-white fst-italic">
              When using React Router and Bootstrap Nav.Link and NavLink do two
              very different things
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-white fst-italic">
              Create a backend account component with email or text options
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-white fst-italic">
              Research a historical weather data API
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-white fst-italic">
              Research an API that will provide good graphs for the weather
              history API
            </ListGroup.Item>
          </ListGroup>
        </AboutRow>
      </Row>
    </Container>
  );
}

export default About;
