import React, { Component, PropTypes } from 'react'
import CommentsContainer from '../containers/CommentsContainer'

class CommentsIndex extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <CommentsContainer />
        {this.props.children}
      </div>
    )
  }
}

export default CommentsIndex