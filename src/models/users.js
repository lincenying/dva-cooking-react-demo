//import pathToRegexp from 'path-to-regexp'
import { query } from '../services/users'

export default {
    namespace: 'users',
    state: {
        list: [],
        curpage: 1
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'query',
                        payload: { page: 1}
                    })
                }
            })
        },
    },
    effects: {
        *query({ payload }, { call, put }) {
            const { data } = yield call(query, payload)
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data.data,
                        curpage: payload.page + 1
                    }
                })
            }
        }
    },
    reducers: {
        querySuccess(state, action) {
            const { list, curpage } = action.payload
            const lists = curpage === 2 ? [].concat(list) : state.list.concat(list)
            return {
                list: lists,
                curpage,
                loading: false
            }
        }
    },
}
