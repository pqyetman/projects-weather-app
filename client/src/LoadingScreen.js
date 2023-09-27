import { Hurricane } from 'react-bootstrap-icons';
import Row from "react-bootstrap/Row";

function LoadingScreen() {

    return (

        <>
            <Row className="mt-2 px-2 text-center text-white justify-content-evenly">
                <Hurricane size={100} style={{ color: "white" }} />
                Loading...
            </Row>
        </>
    )
}

export default LoadingScreen;