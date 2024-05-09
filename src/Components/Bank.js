import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Deposit from './InputDeposit';
import Withdrawal from './InputWithdrawal';
import DisplayBalance from './DisplayBalance';
import AddInterest from './Interest';
import AddFees from './Fees';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

// Create a functional component to define props to pass to the 
// child components
export default function Bank() {

    // Create variables to set the different input values
    const [submitDeposit, setSubmitDeposit] = useState(0);
    const [submitWithdrawal, setSubmitWithdrawal] = useState(0);
    const [submitInterest, setSubmitInterest] = useState(0);
    const [submitFees, setSubmitFees] = useState(0);

    // Create functions to update the values
    function updateDeposit(submitDeposit) {
        setSubmitDeposit(submitDeposit);
    };
    
    function updateWithdrawal(submitWithdrawal) {
        setSubmitWithdrawal(submitWithdrawal);
    };

    function addInterest(submitInterest) {
        setSubmitInterest(submitInterest);
    }

    function addFees(submitFees) {
        setSubmitFees(submitFees);
    }

    // Create the app layout and props to pass to child components
    return (
        <div className="bank-app">
            <Header />
            <Container>
                <Row className="bank">
                    <Col xs={6}>
                        <Stack className="inputs" gap={3}>
                            <Deposit deposit={submitDeposit} updateDeposit={updateDeposit}/>
                            <Withdrawal withdrawal={submitWithdrawal} updateWithdrawal={updateWithdrawal}/>
                            <AddInterest interest={submitInterest} addInterest={addInterest}/>
                            <AddFees fees={submitFees} addFees={addFees}/> 
                        </Stack>
                    </Col>
                    <Col>
                        <DisplayBalance balance={
                            submitDeposit-submitWithdrawal 
                            + ((submitInterest/100)*(submitDeposit-submitWithdrawal))
                            - ((submitFees/100)*(submitDeposit-submitWithdrawal))} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}