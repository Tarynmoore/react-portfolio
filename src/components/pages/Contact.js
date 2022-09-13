import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



// function Contact(props) {
//     const [contact,]
// }


function Contact() {
    // sets the state of the inputs for the contact form
    const [fullName, setFullName] = (useState(''));
    const [email, setEmail] = (useState(''));
    const [input, setInput] = (useState(''));

    function handleSubmit(e) {
        e.preventDefault();

        setFullName('');
        setEmail('');
        setInput('');
    };


    return (
        <div className="fontContact">
            <Form onSubmit={handleSubmit} className="form" >
                <Form.Group className="mb-3" >
                    <Form.Label>First and Last Name</Form.Label>
                    <Form.Control 
                    value={fullName} 
                    type="textarea" 
                    placeholder="John Doe" 
                    onChange={event => setFullName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    value={email} 
                    type="email" 
                    placeholder="name@example.com" 
                    onChange={event => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Questions? Comments? Leave below! </Form.Label>
                    <Form.Control 
                    value={input} 
                    as="textarea" 
                    rows={3} 
                    onChange={event => setInput(event.target.value)}/>
                </Form.Group>
            </Form>
            <Button
                className="contactButton"
                type="submit"
                variant="outline-dark"
                onClick={() => {
                    alert("Thanks, I'll be in contact soon!")
                }}
            >Submit</Button>
        </div>
    )
}

export default Contact;

// export default function Contact() {
//     return(
//     <div className="fontContact">
//         <Form className="form" >
//       <Form.Group className="mb-3" >
//         <Form.Label>First and Last Name</Form.Label>
//         <Form.Control type="textarea" placeholder="John Doe" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Questions? Comments? Leave below! </Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//     </Form>
//     <Button 
//     className="contactButton" 
//     type="submit" 
//     variant="outline-dark"
//     onClick={() => {
//         alert("Thanks, I'll be in contact soon!")
//     }}
//     >Submit</Button>
//     </div>
//     )
// }

