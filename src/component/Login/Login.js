
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { handleGoogleSign, handleEmail, handlePass, error, loggIn, setError } = useAuth()


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
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onClick={handleEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onClick={handlePass} type="password" placeholder="Password" />
                        </Form.Group>

                        <button onClick={loggIn} className="bg-warning rounded py-2 px-3 border-0 me-2">Login</button>


                        <button onClick={handleAndRedirect} className="bg-success rounded py-2 px-3 border-0 me-2">
                            Sign up google
                        </button>

                        <Link to="/sign">New user?</Link>
                        <p>{error}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;