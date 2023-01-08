import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CloudMoon, CloudSun } from 'react-bootstrap-icons'

function EightHourCard() {
  return (
    <Card style={{ width: '15rem', background: "transparent" , borderColor: "white"}}>     
      <Card.Body>
        <Card.Title><CloudMoon size={50} /></Card.Title>
        <Card.Title>20&#8451;</Card.Title>
        <Card.Text>
          This is a description of the weather
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="bg-transparent border-white text-white">Max Temp</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Min Temp</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Wind Speed</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Perciptiation</ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-white text-white">Lifted Index</ListGroup.Item>
      </ListGroup>    
    </Card>
  );
}

export default EightHourCard;