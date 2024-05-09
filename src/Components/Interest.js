import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// Create a functional component to allow user to input interest value and take props
// from parent Bank component
export default function AddInterest(prop) {

    // Create an interest state object with a default value
    const [interest, setInterest] = useState("");

    // Create an input and button to set the interest amount
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="inputs" xs={9}>
                    <label>Enter interest:&nbsp;&nbsp;&nbsp; 
                    <input 
                        onChange={(event) => setInterest(event.target.value)}
                        name="interestInput"
                        value={interest}
                    />
                    % </label>
                    </Col>
                    <Col>
                        <Button 
                        onClick={(event) => prop.addInterest(event.target.value)}
                        value={interest} > Add Interest </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}