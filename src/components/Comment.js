import React, { PropTypes, Component } from 'react'

class Comment extends Component {

  render() {
    const { comment } = this.props
    const { name, text, id } = comment
    const textItem = <section>{text}</section>
    return (
        <div>
          <h4>{name}</h4>
          {textItem}
        </div>
    )
  }

}


Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    id: PropTypes.number.isRequired
  })
}

export default Comment