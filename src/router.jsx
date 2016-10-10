import React from 'react'
import { Router, Route } from 'dva/router'
import IndexPage from './views/app.jsx'
import Article from './views/article.jsx'

export default ({ history }) => {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage} />
            <Route name="article" path="/article/:id" component={Article} />
        </Router>
    )
}
