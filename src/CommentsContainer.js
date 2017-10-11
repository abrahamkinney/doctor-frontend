import React, { Component } from 'react';
import axios from 'axios';

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

  render() {
    return (
      <div>
        Comments
      </div>
    )
  }
}

export default CommentsContainer
