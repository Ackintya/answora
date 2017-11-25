import React from 'react';
import { Media } from 'reactstrap';
import LinkToQuestionID from './LinkToQuestionID'
// import LinkToProfileID from './LinkToProfileID'

const QuestionID = props => {
		return(
			<div className="">
      <Media className="q-box">
        <Media heading>
          {/*<LinkToProfileID question={props.question} />*/}
          <LinkToQuestionID question={props.question} />
          <p>answer: {props.question.answers.length}</p>
        </Media>
        </Media>
      </div>
			)
	}


export default QuestionID

