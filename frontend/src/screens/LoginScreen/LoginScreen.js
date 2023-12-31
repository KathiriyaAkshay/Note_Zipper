import React, { useState } from 'react'
import MainScreen from '../MainScreen'
import { Button, Col, Form, Row} from 'react-bootstrap'
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    const userLogin = useSelector((state)=> state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email, password);
        dispatch(login(email, password));
    }

    return (
        <MainScreen title="LOGIN">
            <div className='loginContainer'>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginScreen