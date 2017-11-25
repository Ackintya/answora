import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import Navbar from '../components/galactic//Navbar';
import helpers from '../helpers'

class Login extends React.Component {

render() {
return (
<div>
<Navbar user={helpers.decodeToken()}/>
	<div className="login">
		
	</div>
</div>
		)
	}
}
export default Login