import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(comment, articleId) {
    const id = Date.now()
    const action = {
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id }
        }
    }
    AppDispatcher.dispatch(action)
}