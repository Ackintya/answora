import React from 'react';
import AddQuestion from './AddQuestion';
import { Media } from 'reactstrap';
import { Button, Badge } from 'reactstrap';
import { FormGroup, Label, Input, Collapse } from 'reactstrap';

class CenterCol extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	collapse: false,
    	UpvoteStatus: 'Vote',
    	UpvoteCount: 0,
    	disabled: false,
    	disabledDownvote: false,
    	DownvoteStatus: 'Downvote',
    	input: '',
    	visibility: false
    }
  	this.toggle = this.toggle.bind(this);
  	this.toggleUpvote = this.toggleUpvote.bind(this)
  	this.toggleDownvote = this.toggleDownvote.bind(this)
  	this.handleInput = this.handleInput.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggle() {
    this.setState({ 
    	collapse: !this.state.collapse 
    });
  }

  toggleUpvote() {
  	this.setState({
  		UpvoteStatus: 'Voted',
  		UpvoteCount: this.state.UpvoteCount + 1,
  		disabled: true,
  		disabledDownvote: false
  	 })
  }

  toggleDownvote() {
  	this.setState({
  		UpvoteStatus: 'Vote',
  		UpvoteCount: this.state.UpvoteCount - 1,
  		disabled: false,
  		DownvoteStatus: 'Downvoted',
  		disabledDownvote: true
  	 })
  }

  handleInput(event) {
		this.setState({
			input: event.target.value
		});
		console.log('Catching Input')
	}

  handleSubmit() {
		this.setState({
			answer: this.state.input
		});
		console.log('Your Answer Submited')
	}

	render() {
  return (
  		
  		<div>

  			<AddQuestion />
  		
	    	<Media className="q-box">
	      	<Media left href="#" className="q-image">
						<img className="q-img" alt="l"
	          	src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/23131549_1353917711402597_7611592203340357848_n.jpg?_nc_eui2=v1%3AAeHsypBzm0ED8dMyrSiwclyi6HW3Tp2AWr7OSmkuebEq93nC3G2FVoitBa2YH508jZNZ5F_wUpoPr5RPoyGpwSnLLEs4FtmEz4UUsbGpI3UV0A&oh=23baf059c5d698813c4c118f2506d17e&oe=5AA88727"
	        	/>      
	      	</Media>
	      	<Media body>
	        <Media heading>
	          Question Title/:id {this.props.user}
	        </Media>
	        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate a.
	      	<div className="btn-group">
	      		<Button outline color="primary" className="btn-upvote" onClick={this.toggleUpvote} disabled={this.state.disabled}>
	      		<Badge pill>{this.state.UpvoteCount}</Badge>{this.state.UpvoteStatus}</Button>
	      		<Button outline color="primary" className="btn-upvote" onClick={this.toggleDownvote} disabled={this.state.disabledDownvote}>{this.state.DownvoteStatus}</Button>
	      		<Button outline color="primary" className="btn-upvote" onClick={this.toggle}>Answer</Button>
	      	</div>
	      </Media>
	    </Media>
	    <Collapse isOpen={this.state.collapse} >
				<FormGroup className="a-form">
				<div className="d-flex flex-column">
					
					<div className="p-2">
						<div className="d-flex flex-row">
						  <div className="p-2">
						  	<img className="q-img"
			           src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/23131549_1353917711402597_7611592203340357848_n.jpg?_nc_eui2=v1%3AAeHsypBzm0ED8dMyrSiwclyi6HW3Tp2AWr7OSmkuebEq93nC3G2FVoitBa2YH508jZNZ5F_wUpoPr5RPoyGpwSnLLEs4FtmEz4UUsbGpI3UV0A&oh=23baf059c5d698813c4c118f2506d17e&oe=5AA88727" alt="m"
			      		/>
						  </div>
						  <div className="p-2">
						  	<Label for="exampleText">username</Label>
						  </div>
						</div>
					</div>
					
					<div className="p-2">
					  <Input value={this.state.input} onChange={this.handleInput} type="textarea" cols="10" rows="5" charswidth="23" name="text" id="exampleText" />
					</div>

					<div className="d-flex">
					  <div className="p-2">
					  	<Button color="primary" type="submit" onClick={this.handleSubmit} >Submit</Button>
					  </div>
					  <div className="ml-auto p-2">
					  	<Input type="file" name="file" id="exampleFile" />
					  </div>
					</div>
				  </div>
				</FormGroup>
			</Collapse>
		</div>
  );
 }
}

export default CenterCol
