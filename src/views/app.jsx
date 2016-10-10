import React from 'react'
import {connect} from 'dva'
import { Link } from 'dva/router'
import Example from '../components/app1.jsx'
import styles from './app.less'

const IndexPage = ({dispatch, topics: {list, curpage}}) => {
    var li = list.map(item => {
        return <li key={item.id}><Link activeClassName="v-link-active" to={`/article/${item.id}`}>{item.title}</Link></li>
    })
    return (
        <div className={styles.normal}>
            <h1>Welcome to dva!</h1>
            <Example />
            <hr />
            <ul className={styles.list}>
                {li}
                <li><a onClick={() => dispatch({type: 'topics/query', payload: { page: curpage }})} href="javascript:;">加载更多</a></li>
            </ul>
        </div>
    )
}

IndexPage.propTypes = {}

function mapStateToProps({ topics }) {
    return { topics }
}

export default connect(mapStateToProps)(IndexPage)
