import React from 'react';
import { Media } from 'reactstrap';
import { Button, Badge } from 'reactstrap';

class CenterColQuestion extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	collapse: false,
    	UpvoteStatus: 'Vote',
    	UpvoteCount: 10,
    	disabled: false,
    	disabledDownvote: false,
    	DownvoteStatus: 'Downvote',
    }
    this.toggle = this.toggle.bind(this);
  	this.toggleUpvote = this.toggleUpvote.bind(this)
  	this.toggleDownvote = this.toggleDownvote.bind(this)
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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

	render() {
		return(
			<div className="q">
		    	<Media className="q-box">
			      <Media body>
			        <Media heading>
			          Question Title/:id {this.props.user}
			        </Media>
			        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate a.
			      	<div className="btn-group">
			      		<Button outline color="primary" className="btn-upvote" onClick={this.toggleUpvote} disabled={this.state.disabled}>
			      		<Badge pill>{this.state.UpvoteCount}</Badge>{this.state.UpvoteStatus}</Button>
			      		<Button outline color="primary" className="btn-upvote" onClick={this.toggleDownvote} disabled={this.state.disabledDownvote}>{this.state.DownvoteStatus}</Button>
			      	</div>
			      </Media>
			    </Media>
			</div>
			)
	}
}

export default CenterColQuestion