import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="#28a745" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <ul>
                                <li className="list-unstyled">
                                    <a class="btn-floating btn-lg btn-fb" type="button" role="button">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-unstyled">
                                    <a class="btn-floating btn-lg btn-tw" type="button" role="button">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-unstyled">
                                    <a class="btn-floating btn-lg btn-ins" type="button" role="button">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.greencityforce.org"> greencityforce.org </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}
export default FooterPage;