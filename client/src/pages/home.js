import React from 'react';
import CenterColQuestions from '../components/CenterColQuestions';
import Navbar from '../components/Navbar';
import LeftCol from '../components/LeftCol';
import RightCol from '../components/RightCol';
import { Row, Col } from 'reactstrap';

class Home extends React.Component {
	render() {
		return(
			<div className="home">
				<Navbar />
				<Row className="wrapper">
		         <Col xs="6" sm="3">
		          	<LeftCol />
		         </Col>

		         <Col xs="6" sm="6">
		         	<CenterColQuestions />
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