import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import './styles.css';

const today = new Date();

const AddNewBill = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <h2>Add New Bill</h2>
      <div className="container">
        <h3>GST: AAAAA0000A</h3>
        <div className="form-container">
          <Form
            name="add-new-form"
            className="add-new-form"
            layout="vertical"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="fields">
              <Form.Item label={<p className="label">Bill No</p>} name="bill_no" >
                <Input />
              </Form.Item>

              <Form.Item label={<p className="label">IND No</p>} name="ind_no">
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              label={<p className="label">Bill Date</p>}
              name="bill_date"
              rules={[{ required: true, message: 'Please set the date!' }]}
            >
              <DatePicker  format={"DD/MM/YYYY"} defaultValue={moment(today, "DD/MM/YYYY")} />
            </Form.Item>

            <p className="label">Petrol</p>
            <div className="fuel-price">
              <Form.Item label={<p className="label">Total Ltr.</p>} name="petrol_ltr">
                <Input />
              </Form.Item>
              <Form.Item label={<p className="label">Price/Ltr</p>} name="petrol_per_ltr">
                <Input />
              </Form.Item>
              <Form.Item label={<p className="label">Amount</p>} name="petrol_amount">
                <Input />
              </Form.Item>
            </div>
            <p className="label">Diesel</p>
            <div className="fuel-price">
              <Form.Item label={<p className="label">Total Ltr.</p>} name="petrol_ltr">
                <Input />
              </Form.Item>
              <Form.Item label={<p className="label">Price/Ltr</p>} name="petrol_per_ltr">
                <Input />
              </Form.Item>
              <Form.Item label={<p className="label">Amount</p>} name="petrol_amount">
                <Input />
              </Form.Item>
            </div>
            <p className="label">Oil</p>
            <div className="fuel-price">
              <Form.Item label={<p className="label">Total Ltr.</p>} name="petrol_ltr">
                <Input />
              </Form.Item>
              <Form.Item label={<p className="label">Price/Ltr</p>} name="petrol_per_ltr">
                <Input />
              </Form.Item>
              <Form.Item label={<p className="label">Amount</p>} name="petrol_amount">
                <Input />
              </Form.Item>
            </div>

            <Form.Item wrapperCol={{ offset: 0, span: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
};

export default AddNewBill;