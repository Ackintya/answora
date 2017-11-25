import React from 'react';
import { Row, Col } from 'reactstrap';

import Navbar from '../components/galactic/Navbar'; 
import LeftCol from '../components/galactic/LeftCol';
import CenterCol from '../components/galactic/CenterCol';
import RightCol from '../components/galactic/RightCol';
import helpers from '../helpers'

class Answers extends React.Component {

	render() {
		return (
			<div >
				<Navbar user={helpers.decodeToken()}/>
				<Row className="wrapper">
		         <Col xs="6" sm="3">
		          	<LeftCol />
		         </Col>

		         <Col xs="6" sm="6">
		         	<CenterCol />
		         </Col>
		          
		         <Col sm="3">
		         	<RightCol />
		         </Col>
        		</Row>
			</div>
			)
		}
	}


export default Answers