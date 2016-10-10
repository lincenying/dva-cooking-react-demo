import request from '../utils/request'

export function topics(config = {page: 1}) {
    return request(`https://cnodejs.org/api/v1/topics?page=${config.page}`)
}
