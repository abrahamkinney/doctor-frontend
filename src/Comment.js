import React, { Component } from 'react'

class Comment extends Component {

  handleClick = () => {
    this.props.onClick(this.props.comment.id)
  }

  render () {
    return(
      <div className="comment" key={this.props.comment.id}>
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
