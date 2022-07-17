import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    console.log(props.service);
    const { Id, name, img, time, call } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height={300} />
                <Card.Body>
                    <Card.Title>
                        {Id}<br />
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {time}<br />
                        {call}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;