import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {addComment} from '../AC/comments'

class CommentList extends Component {

    state = {
        text: '',
        name: ''
    }

    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { article, isOpen } = this.props
        const comments = article.getRelation('comments')
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <ul>{items}</ul>
                {this.getCommentInput()}
            </div>
        )

    }

    getCommentInput() {
        return <form onSubmit={this.addComment}>
            <label>new comment: </label>
            <input value={this.state.text} onChange = {this.handleChange('text')}/>
            <input value={this.state.name} onChange = {this.handleChange('name')}/>
            <input type="submit" value="add comment" />
        </form>
    }

    addComment = (ev) => {
        ev.preventDefault()
        addComment(this.state, this.props.article.id)
        this.setState({
            text: '',
            name: ''
        })
    }
    handleChange = input => (ev) => {
        this.setState({
            [input]: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)