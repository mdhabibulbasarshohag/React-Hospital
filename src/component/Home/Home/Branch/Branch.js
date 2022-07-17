import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Branch.css"

const Branch = () => {
    return (
        <div className="bg-color-1 py-5">
            <Container>
                <h1 style={{ fontSize: "4rem" }} className="text-light py-5 text-center">Enjoy Specialized Care Through Precision, Artistry, And Experience</h1>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="border-0 my-3">
                            <Card.Body>

                                <Card.Title>Teeth Cleaning</Card.Title>
                                <Card.Text>
                                    We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 my-3">
                            <Card.Body>
                                <Card.Title>Teeth Whitening</Card.Title>
                                <Card.Text>
                                    We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 my-3">
                            <Card.Body>
                                <Card.Title>Orthodontics</Card.Title>
                                <Card.Text>
                                    We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 my-3">
                            <Card.Body>
                                <Card.Title>Orthodontics</Card.Title>
                                <Card.Text>
                                    We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 my-3">
                            <Card.Body>
                                <Card.Title>Cosmetic Dentistry</Card.Title>
                                <Card.Text>
                                    We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 my-3">
                            <Card.Body>
                                <Card.Title>General Dentistry</Card.Title>
                                <Card.Text>
                                    We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Branch;