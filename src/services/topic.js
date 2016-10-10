import request from '../utils/request'

export function topic(config) {
    return request(`https://cnodejs.org/api/v1/topic/${config.id}`)
}
