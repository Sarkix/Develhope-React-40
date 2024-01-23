import React, { useEffect, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

function FocusableInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <Container className="mt-4">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        ref={inputRef}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={() => inputRef.current.focus()}
                >
                    Focus Input
                </Button>
            </Form>
        </Container>
    );
}

export default FocusableInput;
