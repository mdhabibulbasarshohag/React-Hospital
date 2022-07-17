import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {

    const { handleGoogleSign, signUpp, handleName, handleEmail, handlePass, error, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home';

    const handleAndRedirect = () => {
        handleGoogleSign()
            .then((result) => {
                history.push(redirect_url)
            }).catch((error) => {
                setError(error.message)
            });
    }

    return (
        <Container>
            <div className="w-50 mx-auto">
                <div className="py-5">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Your Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={signUpp} variant="primary" type="button">
                            Sign up
                        </Button>

                        <button onClick={handleAndRedirect} className="bg-success rounded py-2 px-3 border-0 mx-2">
                            Sign up google
                        </button>
                        <p>{error}</p>
                        <Link to="/log">All ready registered?</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Signup;