import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { IProduct } from "./CreateProduct";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Select } from "antd";


const EditProduct = () => {
  const { id } = useParams();
  const { Option } = Select;
  const [form] = Form.useForm();

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get<IProduct>(
        `http://localhost:3000/products/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  // Lấy dữ liệu về useQuery
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
  });

  useEffect(()=> {
    if(!product) return;
    form.setFieldsValue(product);
  },[product,form]);

  if (isLoading) return <div>Loading...</div>;

  // gửi dữ liệu đi thi dùng useMutation

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form
          form={form}
          // onFinish={handleSubmit}
          layout="vertical"
          style={{ width: "600px" }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please input your category!" }]}
          >
            <Select placeholder="Select a category">
              <Option value="Laptop">Laptop</Option>
              <Option value="SmartPhone">SmartPhone</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditProduct;
