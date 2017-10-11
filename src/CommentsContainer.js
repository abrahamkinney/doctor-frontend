import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment'

class CommentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/comments.json')
    .then(response => {
      console.log(response)
      this.setState({comments: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewComment = () => {
    axios.post(
      'http://localhost:3001/api/v1/comments',
      { comment:
        {
          rating: '',
          comment_body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button className="newCommentButton"
          onClick={this.addNewComment} >
          New Comment
        </button>
        {this.state.comments.map((comment) => {
          return (<Comment comment={comment} key={comment.id} />)
        })}
      </div>
    );
  }
}

export default CommentsContainer
