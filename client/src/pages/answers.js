import React from 'react';
import { Row, Col } from 'reactstrap';

import Navbar from '../components/Navbar'; 
import LeftCol from '../components/LeftCol';
import CenterCol from '../components/CenterCol';
import RightCol from '../components/RightCol';

class Answers extends React.Component {

	render() {
		return (
			<div >
				<Navbar />
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