import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import Navbar from '../components/Navbar';

class Login extends React.Component {

render() {
return (
<div>
<Navbar />
<div className="login">
<Row>
	<Col xs="6">
	<h3>Sign Up</h3>
	<Form>
		<FormGroup>
			<Label for="signupFullName">Username</Label>
			<Input type="email" name="signupUsername" id="signupUsername" />
		</FormGroup>
		<FormGroup>
			<Label for="signupEmail">Email</Label>
			<Input type="email" name="signupEmail" id="signupEmail" />
		</FormGroup>
		<FormGroup>
			<Label for="signupPassword">Password</Label>
			<Input type="password" name="signupPassword" id="signupPassword" />
		</FormGroup>
		<Button>Sign Up</Button>
	</Form>
	</Col>
	<Col xs="6">
    <h3>Login</h3>
    <Form>
      <FormGroup>
        <Label for="loginEmail">Email</Label>
        <Input type="email" name="loginEmail" id="loginEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="loginPassword">Password</Label>
        <Input type="password" name="loginPassword" id="loginPassword" />
      </FormGroup>
      <Button>Login</Button>
    </Form>
  </Col>
</Row>
</div>
</div>
		)
	}
}
export default Login