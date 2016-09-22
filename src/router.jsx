import React from 'react'
import { Router, Route } from 'dva/router'
import IndexPage from './views/app.jsx'

export default function({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage} />
        </Router>
    )
}
