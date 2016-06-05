import React, { Component, PropTypes } from 'react'
import connectToStore from '../decorators/connectToStore'

class CommentsPageContainer extends Component {
  static propTypes = {
    comments: PropTypes.any
  };

  render() {
    const { comments, loading } = this.props
    console.log('___', this.props)
    if (!comments) return <h3>Loading...</h3>
    const items = comments.map((comment) => <p key = {comment.id}>{comment.id}. {comment.text} by {comment.user} </p>)
    return <div>{items}</div>
  }
}

function getState(stores, props) {
  return {
    comments: stores.comments.getOrLoadForPage(props.page)
  }
}

export default connectToStore(['comments'], getState)(CommentsPageContainer)