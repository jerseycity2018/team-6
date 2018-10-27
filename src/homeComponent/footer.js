import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="#28a745" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                    <Container fluid>
                    <Row>
                    <Col  sm="12" md={{ size: 6, offset: 3 }}>
                        <SocialIcon url="http://twitter.com/in/jaketrent" />
                        <SocialIcon url="http://facebook.com/in/jaketrent" />
                        <SocialIcon url="http://instagram.com/in/jaketrent" />
                    </Col>
                    </Row>

                    <Row>
                        <Col  sm="12" md={{ size: 6, offset: 3 }}>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.greencityforce.org"> greencityforce.org </a>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </Footer>
        );
    }
}
export default FooterPage;