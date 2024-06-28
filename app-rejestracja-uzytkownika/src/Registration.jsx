import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Registration extends Component {
    render() {
        return <div className="Register">
            <Form>
                <Form.Group controId="username" size="lg">
                    <Form.Label>Username</Form.Label>
                    <Form.Control autofocus name="username" />
                </Form.Group>

                <Form.Group controId="password" size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" />
                </Form.Group>

                <Button block={true} size="lg" type="submit">Register</Button>
            </Form>
        </div>
    }
}



export default Registration 