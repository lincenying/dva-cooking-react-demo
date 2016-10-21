import React from 'react'
import {connect} from 'dva'
import { Link } from 'dva/router'
import { Row, Col } from 'antd'
import Example from '../components/app1.jsx'
import 'antd/dist/antd.css'
import './app.less'


const IndexPage = ({dispatch, topics: {list, curpage}}) => {
    var li = list.map(item => {
        return <li className="test" key={item.id}><Link activeClassName="v-link-active" to={`/article/${item.id}`}>{item.title}</Link></li>
    })
    return (
        <div className="normal">
            <Row>
                <Col span={6}>col-6</Col>
                <Col span={18}>
                    <Example />
                    <hr />
                    <ul className="list">
                        {li}
                        <li className="test"><a onClick={() => dispatch({type: 'topics/query', payload: { page: curpage }})} href="javascript:;">加载更多</a></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

IndexPage.propTypes = {}

function mapStateToProps({ topics }) {
    return { topics }
}

export default connect(mapStateToProps)(IndexPage)
