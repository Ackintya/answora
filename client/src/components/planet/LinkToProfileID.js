import React from "react"
import Link from "./Link"

const LinkToProfileID = props => (
  <Link to={`/profile/${props.user._id}`}>{props.user.name}</Link>
)

export default LinkToProfileID
