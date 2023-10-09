import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import PlaceHolder from "./PlaceHolder";
import { percipitationAmount, cloudCoverage } from "./WeatherDataFunctions";

function convertData(title, val) {
  let data = "";
  switch (title) {
    case "Cloud Coverage":
      data = cloudCoverage(val);
      break;
    case "Lifted Index":
      data = val;
      break;
    case "Temperature":
      data = `${val}°C | ${((parseFloat(val) * 9) / 5 + 32).toFixed(1)} °F`;
      break;
    case "Percipitation Amount":
      data = percipitationAmount(val);
      break;
    case "Humidty":
      data = `${val}%`;
      break;
    default:
      data = "";
  }

  return data;
}

function FutureForecastStatCol({ loading, statData, title }) {
  return (
    <>
      <Col
        md={2}
        className="bg-transparent text-white border-end border-start border-white"
      >
        <Row>
          <h4 className="text-center">{title} </h4>
        </Row>
        <ListGroup variant="flush" className="text-center">
          <ListGroup.Item className="bg-transparent border-white text-white">
            Maximum:{" "}
            {loading ? (
              <PlaceHolder size={6} />
            ) : (
              convertData(title, statData[0])
            )}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-white text-white">
            Average:{" "}
            {loading ? (
              <PlaceHolder size={6} />
            ) : (
              convertData(title, statData[1])
            )}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-white text-white">
            Minimum:{" "}
            {loading ? (
              <PlaceHolder size={6} />
            ) : (
              convertData(title, statData[2])
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
}

export default FutureForecastStatCol;
