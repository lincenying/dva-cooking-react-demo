import React from 'react'
import {Router} from 'dva/router'
export default({history, app}) => {
    const routerThen = (callback, [component, model,]) => {
        app.model(model.default || model)
        callback(null, component.default || component)
    }
    const routeConfig = [
        {
            name: 'home',
            path: '/',
            getComponent(location, callback) {
                Promise.all([
                    System.import ('./views/app.jsx'),
                    System.import ('./models/topics'),
                ]).then(routerThen.bind(null, callback))
            }
        }, {
            name: 'article',
            path: '/article/:id',
            getComponent(location, callback) {
                Promise.all([
                    System.import ('./views/article.jsx'),
                    System.import ('./models/topic'),
                ]).then(routerThen.bind(null, callback))
            }
        },
    ]
    return <Router history={history} routes={routeConfig} />
}
