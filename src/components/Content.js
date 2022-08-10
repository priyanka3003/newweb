import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div className="content m-5">
            <Row className="justify-content-md-center">
                <Link to="/"><img
                    src="https://i.redd.it/oldnxqjabms31.png"
                    alt="content-section"
                /></Link>
            </Row>
        </div>
    );
}

export default Content;
