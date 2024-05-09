import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// Create a functional component to allow user to input withdrawal value and take props
// from parent Bank component
export default function Withdrawal(prop) {

    // Create a withdrawal state object with a default value
    const [withdrawal, setWithdrawal] = useState("");

    // Create an input and button to set the withdrawal amount
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="inputs" xs={9}>
                    <label>Enter amount to withdraw: £
                    <input 
                        onChange={(event) => setWithdrawal(event.target.value)}
                        name="withdrawalInput"
                        value={withdrawal}
                    />
                    &nbsp;&nbsp;&nbsp;</label>
                    </Col>
                    <Col>
                        <Button onClick={(event) => prop.updateWithdrawal(event.target.value)}
                        value={withdrawal} > Add Withdrawal </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}