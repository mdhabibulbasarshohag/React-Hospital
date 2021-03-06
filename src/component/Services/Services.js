import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-5">
            <Container>
                <h1 className="mb-5">Services</h1>
                <Row xs={1} lg={2} className="g-4">
                    {
                        services.map((service) => <Service
                            key={service._id}
                            service={service}></Service>)
                    }
                </Row>
            </Container>

            <div>

            </div>
        </div>
    );
};

export default Services;