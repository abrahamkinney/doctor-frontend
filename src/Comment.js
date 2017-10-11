import React from 'react'

const Comment = ({comment}) =>
  <div className="comment" key={comment.id}>
    <h4>Rating: {comment.rating}</h4>
  <p>Comment: {comment.comment_body}</p>
  </div>

export default Comment
