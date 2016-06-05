import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_PER_PAGE } from '../constants'
import AppDispatcher from '../dispatcher'
import { loadCommentsCall, loadCommentsPerPageCall } from './apiCalls'
import { asyncAC } from './utils'

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadComments = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadCommentsCall)

export const loadCommentsPage = asyncAC(LOAD_COMMENTS_PER_PAGE, loadCommentsPerPageCall)
