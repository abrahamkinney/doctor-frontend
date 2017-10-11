import React, { Component } from 'react'
import axios from 'axios'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.comment.rating,
      comment_body: this.props.comment.comment_body
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const comment = {
      rating: this.state.rating,
      comment_body: this.state.comment_body
    }

    axios.put(
      `http://localhost:3001/api/v1/comments/${this.props.comment.id}`,
      {
        comment: comment
      })
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="comment">
        <form onBlur={this.handleBlur} >
          <input className='input' type="text"
            name="rating" placeholder='Rating (1 through 5)'
            value={this.state.rating} onChange={this.handleInput} />
          <textarea className='input' name="comment_body"
            placeholder='Your commments'
            value={this.state.comment_body} onChange={this.handleInput}>
          </textarea>
        </form>
      </div>
    );
  }
}

export default CommentForm
