import dva from 'dva'
import topics from './models/topics'
import topic from './models/topic'
import router from './router.jsx'

// 1. Initialize
const app = dva({
    onError(error) {
        console.error(error.stack)
    },
})

// 2. Plugins
//app.use({});

// 3. Model
app.model(topics)
app.model(topic)

// 4. Router
app.router(router)

// 5. Start
app.start('#root')
