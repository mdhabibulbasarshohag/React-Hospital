import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({ doctor }) => {
  const { name, img, Id, title } = doctor

  const history = useHistory()
  const viewDetails = () => {
    history.push(`/details/${Id}`)
  }

  return (
    <Col>
      <Card className="pb-3">
        <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{Id}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
        </Card.Body>
        <Button onClick={viewDetails} className="w-50 mx-auto">View Details</Button>
      </Card>
    </Col>
  );
};

export default Doctor;