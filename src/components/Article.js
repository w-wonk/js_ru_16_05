import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false,
        some: 'other'
    }

    render() {
        const { article } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, id } = article
        const { isOpen } = this.state
        const textItem = isOpen ? <section>{text}</section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {textItem}
                <CommentList comments = {article.comments}/>
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.number.isRequired
    })
}

export default Article