import React from 'react'
import {connect} from 'dva'
import Example from '../components/app1.jsx'
import styles from './app.less'

function IndexPage({dispatch, users: {list, curpage}}) {
    var li = list.map(item => {
        return <li key={item.id}>{ item.title }</li>
    })
    return (
        <div className={styles.normal}>
            <h1>Welcome to dva!</h1>
            <Example />
            <hr />
            <ul className={styles.list}>
                {li}
                <li><a onClick={() => dispatch({type: 'users/query', payload: { page: curpage }})} href="javascript:;">加载更多</a></li>
            </ul>
        </div>
    )
}

IndexPage.propTypes = {}

function mapStateToProps({ users }) {
    return {users}
}

export default connect(mapStateToProps)(IndexPage)
