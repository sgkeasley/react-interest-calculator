import React from 'react';

// Create a functional component to display the balance and take props
// from parent Bank component
export default function DisplayBalance(prop) {
    
    return (
        <div>
            <h3 id="balance">Balance: £{prop.balance.toFixed(2)}</h3>
        </div>
    );
}