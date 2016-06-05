import $ from 'jquery'

export function loadAllArticlesCall() {
    return $.get('/api/article')
}

export function loadArticleCall({ id }) {
    return $.get(`/api/article/${id}`)
}

export function loadCommentsCall( { id }) {
    return $.get(`/api/comment?article=${id}`)
}

export function loadCommentsPerPageCall( {page} ) {
    return $.get(`/api/comment?limit=10&offset=${(page - 1) * 10}`)
}

export function loadAllCommentsCall() {
    return $.get(`/api/comment`)
}