import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from "react-router-dom";
import AskQuestion from '../planet/AskQuestion.js'

const Navbar = props => {
const USER = props.user
const passing = props.history.push
console.log(USER)
		return (
				<div >
					<Nav className="nav">
            {USER &&(
    						<NavItem>
    						<NavLink className="quora-logo  navlink" href="/welcome"><img width="100" alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/512px-Quora_logo_2015.svg.png"/></NavLink>
              	</NavItem>
              )}

            {USER &&(
            	<NavItem>
              	<NavLink href="/" className=" navlink">Home</NavLink>
            	</NavItem>
              )}

            {USER &&(
            	<NavItem>
              	<NavLink href="/answers" className=" navlink">Answers</NavLink>
            	</NavItem>
              )}

            {USER &&(
            	<NavItem>
              	<NavLink href="#" className="separator"></NavLink>
            	</NavItem>
              )}

            {USER &&(
            	<NavItem>
              	<NavLink href="#" className="profile navlink">
              	<span className="username">{USER.name}</span>
              	<img className="profile-pic" width="40" alt="img" src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/23131549_1353917711402597_7611592203340357848_n.jpg?_nc_eui2=v1%3AAeHsypBzm0ED8dMyrSiwclyi6HW3Tp2AWr7OSmkuebEq93nC3G2FVoitBa2YH508jZNZ5F_wUpoPr5RPoyGpwSnLLEs4FtmEz4UUsbGpI3UV0A&oh=23baf059c5d698813c4c118f2506d17e&oe=5AA88727"/></NavLink>
            	</NavItem>
              )}

            	<NavItem>
              	<NavLink href="#" className="btn-addquestion navlink">
              		<AskQuestion fromParent={passing} passUser={USER}/>
              	</NavLink>
            	</NavItem>
        	</Nav>

			</div>
			)
	
}

export default withRouter(Navbar)