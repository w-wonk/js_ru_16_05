import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Body from './Body'
import toggleOpen from '../decorators/toggleOpen'
import { deleteArticle, loadArticleById } from '../AC/articles'
import { commentStore } from '../stores'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            some: ''
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(newProps) {
        const {isOpen, article: { id, text, loading }} = newProps
        if (isOpen && !text && !loading ) loadArticleById({ id })
    }

    componentDidUpdate() {
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article
        const textItem = isOpen ? <Body article = {article} />: null
        return (
            <div>
                <h3 onClick = {toggleOpen} ref="title">
                    {title}
                    <a href="#" onClick={this.handleDelete}>delete me</a>
                </h3>
                {textItem}
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.number.isRequired
    }),

    //From toggleOpen decorator
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default Article