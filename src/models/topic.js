import pathToRegexp from 'path-to-regexp'
import { topic } from '../services/topic'

export default {
    namespace: 'topic',
    state: {
        data: {},
        pathname: ''
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({pathname}) => {
                const match = pathToRegexp(`/article/:id`).exec(pathname)
                if (match) {
                    const id = match[1]
                    dispatch({
                        type: 'query',
                        payload: { id, pathname }
                    })
                }
            })
        },
    },
    effects: {
        *query({ payload }, { call, put, select }) {
            const { pathname } = yield select(state => state.topic)
            if (pathname !== payload.pathname ) {
                const { data } = yield call(topic, payload)
                if (data) {
                    yield put({
                        type: 'querySuccess',
                        payload: {
                            data: data.data,
                            pathname: payload.pathname
                        }
                    })
                }
            }
        }
    },
    reducers: {
        querySuccess(state, action) {
            const { data, pathname } = action.payload
            return {
                data,
                pathname
            }
        }
    },
}
