import { Button, Card, Form, Input } from "antd";
import React from "react";

const Register = () => {
  return (
    <>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Card  variant="outlined" style={{ width: 400 }}>
            <h1 style={{ textAlign: "center" }}>Register Form</h1>
            <Form layout="vertical" >
                <Form.Item label="username" rules={[{ required: true, message: "Please input your username!" }]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="email" rules={[{ required: true, message: "Please input your email!" }]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="password" rules={[{ required: true, message: "Please input your password!" }]}>
                    <Input type="password"/>
                </Form.Item>
                <Form.Item  style={{ textAlign: "end" }}>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
          </Card>
      </div>
    </>
  );
};

export default Register;
