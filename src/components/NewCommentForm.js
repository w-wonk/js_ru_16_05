import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        text: '',
        name: ''

    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                new comment: <input value = {this.state.text} onChange = {this.handleChange('text')}/>
                name: <input value = {this.state.name} onChange = {this.handleChange('name')} />
                <input type="submit" value="add comment" />
            </form>
        )
    }

    handleChange = input => ev => {
        this.setState({
            [input]: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        addComment(this.props.articleId, this.state)
        this.setState({
            text: '',
            name: ''
        })
    }

}

export default NewCommentForm