import React from 'react';
import './Home.css'
import { Col, Row } from 'react-bootstrap';

const home = (props) => {
    return (
        <Row>
            <Col md={12}>
                <div className={'homeText'}>
                    "Welcome!!"
                </div>
            </Col>
        </Row>
    )
}

export default home;