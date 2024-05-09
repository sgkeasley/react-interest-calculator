import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// Create a functional component to allow user to input deposit value and take props
// from parent Bank component
export default function Deposit(prop) {

    // Create a deposit state object with a default value
    const [deposit, setDeposit] = useState(""); 

    // Create an input and button to set the deposit amount
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="inputs" xs={9}>
                    <label>Enter amount to deposit: £
                    <input 
                        onChange={(event) => setDeposit(event.target.value)}
                        name="depositInput"
                        value={deposit}
                    />
                    &nbsp;&nbsp;&nbsp;</label>
                    </Col>
                    <Col>
                        <Button 
                        onClick={(event) => prop.updateDeposit(event.target.value)}
                        value={deposit} > Add Deposit </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
