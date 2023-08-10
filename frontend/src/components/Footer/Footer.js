import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'

const Footer = () => {
  return (
    <footer
        style={{
            width: "100%",
            position: "relative",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
        }}
    >
        <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; Note Zipper</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer