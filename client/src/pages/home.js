import React from 'react';
import CenterColQuestion from '../components/planet/CenterColQuestion';
import Navbar from '../components/galactic/Navbar';
import LeftCol from '../components/galactic/LeftCol';
import RightCol from '../components/galactic/RightCol';
import { Row, Col } from 'reactstrap';
import helpers from '../helpers'

class Home extends React.Component {
	render() {
		return(
			<div className="home">
				<Navbar user={helpers.decodeToken()}/>
				<Row className="wrapper">
		         <Col xs="6" sm="3">
		          	<LeftCol />
		         </Col>

		         <Col xs="6" sm="6">
		         	<CenterColQuestion />
		         </Col>
		          
		         <Col sm="3">
		         	<RightCol />
		         </Col>
        		</Row>
			</div>
			)
	}
}

export default Home