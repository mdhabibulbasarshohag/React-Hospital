import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const [docDetails, setDocDetails] = useState([])
    const { Id } = useParams()
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDocDetails(data.find(x => x.Id === +Id)))
    }, [])
    return (
        <Container>
            <div className="my-5">
                <div className="my-5">
                    <h1>This is your id no : {Id}</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={docDetails.img} alt="" className="w-100" />
                    </div>
                    <div className="col-md-8">
                        <h3>{docDetails.name}</h3>
                        <p>Call {docDetails.call}</p>
                        <p>Call {docDetails.time}</p>
                        <p>{docDetails.introduction}</p>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Details;