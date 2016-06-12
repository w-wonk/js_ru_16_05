import React, { Component, PropTypes } from 'react'
import connectToStore from '../decorators/connectToStore'
import { Link } from 'react-router'

class CommentsPagination extends Component {
    static propTypes = {
        total: PropTypes.number
    };

    render() {
        const { total } = this.props
        if (!total) return null
        return this.getPagination(total)
    }

    getPagination(total) {
        const links = Array(...Array(Math.floor((total - 1)/10) + 1))
            .map((el, index) => (
                <li key={index}>
                    <Link to={`/comments/${index + 1}`} activeClassName="active" activeStyle={{color:'red'}}>{index + 1}</Link>
                </li>)
            )
        return <ul>{links}</ul>
    }
}

function getState(stores) {
    return {
        total: stores.comments.total
    }
}

export default connectToStore(['comments'], getState)(CommentsPagination)