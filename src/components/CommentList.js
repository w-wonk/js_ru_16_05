import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  state = {
    isOpen: false,
    some: 'other'
  }

  render () {
    const { comments } = this.props
    if (!comments) return <h4>No comments yet</h4>
    const { isOpen } = this.state
    const commentItems = comments && isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>) : null
    return (
        <div>
          <div onClick = {this.handleClick}>comments</div>
          <ul>
            {commentItems}
          </ul>
        </div>
    )
  }
  handleClick = (ev) => {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList