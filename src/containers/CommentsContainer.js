import React, { Component, PropTypes } from 'react'
import connectToStore from '../decorators/connectToStore'
import { Link } from 'react-router'

class CommentsContainer extends Component {
  static propTypes = {
    total: PropTypes.number
  };

  render() {
    const { total } = this.props
    if (!total) return null
    return this.getPagination(total)
  }

  getPagination(total) {
    const links = Array(...Array(Math.floor(total / 10) + 1))
      .map((el, index) => <li key={index}><Link to={`/comments/${index + 1}`}>{index + 1} page</Link></li>)
    return (
      <div>
        <h3>List of all comments</h3>
        <ul>{links}</ul>
      </div>
    )
  }
}

function getState(stores) {
  return {
    total: stores.comments.total
  }
}

export default connectToStore(['comments'], getState)(CommentsContainer)