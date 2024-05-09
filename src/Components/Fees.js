import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// Create a functional component to allow user to input fees value and take props
// from parent Bank component
export default function AddFees(prop) {

    // Create a fees state object with a default value
    const [fees, setFees] = useState("");

    // Create an input and button to set the fees amount
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="inputs" xs={9}>
                    <label>Enter bank fees:&nbsp;&nbsp;&nbsp; 
                    <input 
                        onChange={(event) => setFees(event.target.value)}
                        name="feesInput"
                        value={fees}
                    />
                    % </label>
                    </Col>
                    <Col>
                        <Button 
                        onClick={(event) => prop.addFees(event.target.value)}
                        value={fees} > Add Bank Fees </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}