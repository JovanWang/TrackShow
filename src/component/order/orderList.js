'use strict';
import React  from "react";
import { Table, Icon } from 'antd';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { Row,Col } from 'antd';
import RecorderOrderButton from './recorderOrderButton';
import {store} from '../../index';
const columns = [{
  title: 'ID',
  dataIndex: 'orderid',
  key: 'orderid',
}, {
  title: '接单出租车ID',
  dataIndex: 'taxiid',
  key: 'taxiid',
}, {
  title: '乘客ID',
  dataIndex: 'passengerid',
  key: 'passengerid',
},{
  title: '上车时间',
  dataIndex: 'start_time',
  key: 'start_time',
},{
  title: '价格/元',
  dataIndex: 'price',
  key: 'price',
},{
  title: '距离/千米',
  dataIndex: 'distance',
  key: 'distance',
},{
  title: '操作',
  key: 'action',
  render: (text, record) => {
    return (
      <span>
      <Col span={10} >
        <RecorderOrderButton id={text.orderid} startTime={text.start_time} endTime={text.end_time}/>
      </Col>
      <Col span={10} >
        <Button type='danger'>删除</Button>
      </Col>

      </span>
    );
  },
}];

class OrderList extends React.Component{
    render(){
      return (
        <div>
        <Table rowKey={record=>record.id} columns={columns} dataSource={this.props.orders} />
        </div>
      )
    }
}

export default OrderList;
