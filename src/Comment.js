import React, { Component } from 'react'

class Comment extends Component {

  handleClick = () => {
    this.props.onClick(this.props.comment.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.comment.id)
  }

  render () {
    return(
      <div className="comment" key={this.props.comment.id}>
        <span className="delete" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>
          Rating: {this.props.comment.rating}
        </h4>
        <p onClick={this.handleClick}>
          Comment: {this.props.comment.comment_body}
        </p>
      </div>
    )
  }
}

export default Comment
