import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    function validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // sets the state of the inputs for the contact form,
    // and the errorMessage
    const [fullName, setFullName] = (useState(''));
    const [email, setEmail] = (useState(''));
    const [message, setMessage] = (useState(''));
    const [error, setError] = useState('');

    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === 'email') {
            const validate = validateEmail(e.target.value);
            if (!validate) {
                setError('Please enter a valid email')
            } else {
                setError('')
            }
        } else {
            if(!e.target.value.length) {
                setError(`${e.target.name} is required.`)
            } else {
                setError('')
            }
        }
        if (!error) {
            setFullName({...fullName, [e.target.name]: e.target.value })
            setEmail({...email, [e.target.name]: e.target.value})
            setMessage({...message, [e.target.name]: e.target.value})
        }
    }

    function handleEvent(e) {
        e.preventDefault();
    };


    return (
        <div className="fontContact">
            <Form className="form" >
                <Form.Group className="mb-3" >
                    <Form.Label>First and Last Name</Form.Label>
                    <Form.Control
                        value={fullName}
                        type="textarea"
                        name="name"
                        placeholder="John Doe"
                        onBlur={handleChange}
                        onChange={event => setFullName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        onBlur={handleChange}
                        onChange={event => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Questions? Comments? Leave below! </Form.Label>
                    <Form.Control
                        value={message}
                        name="message"
                        as="textarea"
                        onBlur={handleChange}
                        rows={3}
                        onChange={event => setMessage(event.target.value)} />
                </Form.Group>
            </Form>
            <div>
                <p>{error}</p>
            </div>
            <Button
                onSubmit={handleEvent}
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

