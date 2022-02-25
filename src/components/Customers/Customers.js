import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'name',
  },{
    title: 'Customer Phone',
    dataIndex: 'phone'
  },{
    title: 'Bill No.',
    dataIndex: 'billno'
  },{
    title: 'IND No',
    dataIndex: 'indno',
  },{
    title: 'Amount',
    dataIndex: 'amount',
  }
];

const data = [{
    key: '1',
    name: 'John Brown',
    phone: '7878712121',
    billno: 'P-2120',
    indno: 'P-2121',
    amount: '100'
  },{
    key: '2',
    name: 'Jim Green',
    phone: '7878712121',
    billno: 'P-2120',
    indno: 'P-2121',
    amount: '100'
  },{
    key: '3',
    name: 'Joe Black',
    phone: '7878712121',
    billno: 'P-2120',
    indno: 'P-2121',
    amount: '100'
  },{
    key: '4',
    name: 'Jim Red',
    phone: '7878712121',
    billno: 'P-2120',
    indno: 'P-2121',
    amount: '100'
  }];


const Customers = (props) => {
  return (
    <div>
    <h2>Customers</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Customers;