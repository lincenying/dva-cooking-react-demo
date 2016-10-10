//import pathToRegexp from 'path-to-regexp'
import { topics } from '../services/topics'

export default {
    namespace: 'topics',
    state: {
        list: [],
        curpage: 1,
        pathname: ''
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'query',
                        payload: { page: 1, pathname }
                    })
                }
            })
        },
    },
    effects: {
        *query({ payload }, { call, put, select }) {
            const list = yield select(state => state.topics.list)
            if (!list.length || payload.page > 1) {
                const { data } = yield call(topics, payload)
                if (data) {
                    yield put({
                        type: 'querySuccess',
                        payload: {
                            list: data.data,
                            curpage: payload.page + 1,
                            pathname: payload.pathname
                        }
                    })
                }
            }
        }
    },
    reducers: {
        querySuccess(state, action) {
            const { list, curpage, pathname } = action.payload
            const lists = curpage === 2 ? [].concat(list) : state.list.concat(list)
            return {
                list: lists,
                curpage,
                pathname,
                loading: false
            }
        }
    },
}
