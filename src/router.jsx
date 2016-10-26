import React from 'react'
import { Router, Route } from 'dva/router'

const routerThen = (app, callback, [component, model]) => {
    app.model(model.default || model)
    callback(null, component.default || component)
}

export default ({ history, app }) => {
    return (
        <Router history={history}>
            <Route name="home" path="/" getComponent={(location, callback) => {
                Promise.all([
                    System.import('./views/app.jsx'),
                    System.import('./models/topics')
                ]).then(routerThen.bind(null, app, callback))
            }} />
            <Route name="article" path="/article/:id" getComponent={(location, callback) => {
                Promise.all([
                    System.import('./views/article.jsx'),
                    System.import('./models/topic')
                ]).then(routerThen.bind(null, app, callback))
            }} />
        </Router>
    )
}
