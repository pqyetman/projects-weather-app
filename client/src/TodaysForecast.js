import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodaysForecastCarousel from "./TodaysForecastCarousel";
import TodaysForecastLeftCol from "./TodaysForecastLeftCol";
import TodaysForecastCards from "./TodaysForecastCards";

function TodaysForecast({
  todaysWeather,
  loading,
  location,
  setLocation,
  setCoords,
}) {
  const currentForcast = todaysWeather[2];
  const windSpeed = todaysWeather[2].wind10m.speed;
  const windDirection = todaysWeather[2].wind10m.direction;

  return (
    <>
      <Container fluid>
        <Col md={12} className="text-white pb-5 mb-0 ">
          <Row>
            <TodaysForecastLeftCol
              setLocation={setLocation}
              loading={loading}
              setCoords={setCoords}
              location={location}
              currentForcast={currentForcast}
              windSpeed={windSpeed}
              windDirection={windDirection}
            />

            <TodaysForecastCarousel
              loading={loading}
              todaysWeather={todaysWeather}
            />

            <TodaysForecastCards
              loading={loading}
              todaysWeather={todaysWeather}
            />
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default TodaysForecast;
