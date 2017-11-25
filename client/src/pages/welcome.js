import React from 'react';
import { Col, Row } from 'reactstrap';
import Navbar from '../components/galactic/Navbar';
import SignUp from '../components/galactic/SignUp';
import Login from '../components/galactic/Login';

import helpers from "../helpers"

class Welcome extends React.Component {
	componentWillMount() {
    	helpers.deleteToken()
  }

render() {
return (
		<div>
			<Navbar />
			<div className="login">
				<Row>
					<Col xs="6">
						<SignUp />
					</Col>
					<Col xs="6">
						<Login />
					</Col>
				</Row>
			</div>
		</div>
		)
	}
}

export default Welcome