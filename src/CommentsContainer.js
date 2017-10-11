import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment'
import update from 'immutability-helper'
import CommentForm from './CommentForm'

class CommentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      editingCommentId: "",
      notification: ''
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
      const comments = update(this.state.comments, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        comments: comments,
        editingCommentId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  updateComment = (comment) => {
    const commentIndex = this.state.comments.findIndex(x => x.id === comment.id)
    const comments = update(this.state.comments, {
      [commentIndex]: { $set: comment }
    })
    this.setState({
      comments: comments,
      notification: 'Comment Saved!'
    })
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  enableEditing = (id) => {
    this.setState({editingCommentId: id})
  }

  deleteComment = (id) => {
    axios.delete(`http://localhost:3001/api/v1/comments/${id}`)
    .then(response => {
      const commentIndex = this.state.comments.findIndex(x => x.id === id)
      const comments = update(this.state.comments, { $splice: [[commentIndex, 1]]})
      this.setState({comments: comments})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div className="new-comment-container">
          <button className="new-comment-button"
            onClick={this.addNewComment} >
            New Comment
          </button>
          <br/>
          <span className="notification">
            {this.state.notification}
          </span>
        </div>
        <div className="comment-block">
          {this.state.comments.map((comment) => {
            if(this.state.editingCommentId === comment.id) {
              return(<CommentForm
                      comment={comment}
                      key={comment.id}
                      updateComment={this.updateComment}
                      resetNotification={this.resetNotification} />)
            } else {
              return (<Comment
                        comment={comment}
                        key={comment.id}
                        updateComment={this.updateComment}
                        onDelete={this.deleteComment}
                        onClick={this.enableEditing} resetNotification={this.resetNotification} />)
            }
          })}
        </div>
      </div>
    );
  }
}

export default CommentsContainer
