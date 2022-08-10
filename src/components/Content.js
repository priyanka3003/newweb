import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div className="content m-5">
            <Row className="justify-content-md-center">
                <Link to="/"><img
                    src="https://i.redd.it/oldnxqjabms31.png"
                    alt="content-section"
                    width={1000}
                    height={300}
                /></Link>
            </Row>
        </div>
    );
}

export default Content;
