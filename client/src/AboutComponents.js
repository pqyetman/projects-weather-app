import AboutRow from "./AboutRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutComponents() {

    return (
        <>
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
                    than as a fallback controller for React Router. At some point in the
                    future I would like to set up accounts and have an email system to
                    send daily forecast emails. You can find the code for this application
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
        </>
    )

}

export default AboutComponents;