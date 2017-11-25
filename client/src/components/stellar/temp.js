// import React from 'react';
// import { Media } from 'reactstrap';
// import { Button, Badge } from 'reactstrap';
// import QuestionID from './QuestionID'
// import axios from "axios"

// class CenterColQuestion extends React.Component {
// 	constructor(props) {
//     super(props);
//     this.state = { 
//     	collapse: false,
//     	UpvoteStatus: 'Vote',
//     	UpvoteCount: 10,
//     	disabled: false,
//     	disabledDownvote: false,
//     	DownvoteStatus: 'Downvote',
//       questions: []
//     }
//     this.toggle = this.toggle.bind(this);
//   	this.toggleUpvote = this.toggleUpvote.bind(this)
//   	this.toggleDownvote = this.toggleDownvote.bind(this)
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }

//   toggleUpvote() {
//   	this.setState({
//   		UpvoteStatus: 'Voted',
//   		UpvoteCount: this.state.UpvoteCount + 1,
//   		disabled: true,
//   		disabledDownvote: false
//   	 })
//   }

//   toggleDownvote() {
//   	this.setState({
//   		UpvoteStatus: 'Vote',
//   		UpvoteCount: this.state.UpvoteCount - 1,
//   		disabled: false,
//   		DownvoteStatus: 'Downvoted',
//   		disabledDownvote: true
//   	 })
//   }

//   componentWillMount() {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/api/questions`)
//       .then(response => {
//         this.setState({ questions: response.data })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

// 	render() {
// 		return(
// 			<div className="q">
// 		    	<Media className="q-box">
// 			      <Media body>
// 			        {this.state.questions.map(question => {
//                 return <QuestionID key={question.id} question={question} />
//               })}
// 			      	<div className="btn-group">
// 			      		<Button outline color="primary" className="btn-upvote" onClick={this.toggleUpvote} disabled={this.state.disabled}>
// 			      		<Badge pill>{this.state.UpvoteCount}</Badge>{this.state.UpvoteStatus}</Button>
// 			      		<Button outline color="primary" className="btn-upvote" onClick={this.toggleDownvote} disabled={this.state.disabledDownvote}>{this.state.DownvoteStatus}</Button>
// 			      	</div>
// 			      </Media>
// 			    </Media>
// 			</div>
// 			)
// 	}
// }

// export default CenterColQuestion