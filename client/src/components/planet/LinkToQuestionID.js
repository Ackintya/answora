import React from "react"
import Link from "./Link"

const LinkToQuestionID = props => (
  <Link to={`/questions/${props.question._id}`}>{props.question.title}</Link>
)

export default LinkToQuestionID