import React, { useEffect } from 'react'
import './LandingPage.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'


const LandingPage = ({navigate}) => {
    useEffect(()=>{
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            navigate("/mynotes");
        }
    }, [navigate])

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcom to Note Zipper</h1>
                            <p className='subtitle'>One Safe place for all your notes.</p>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className="landingbutton">
                                    Login
                                </Button>
                            </a>
                            <a href='/register'>
                                <Button
                                    size='lg'
                                    className='landingbutton'
                                    variant='outline-primary'
                                >
                                    Signup
                                </Button>
                            </a>
                        </div>
                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default LandingPage