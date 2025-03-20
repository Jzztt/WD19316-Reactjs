import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Select } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

interface IProduct {
  name: string;
  price: number;
  description: string;
  category: string;
}
const CreateProduct = () => {
  const navigate = useNavigate();
  const { Option } = Select;
  const [form] = Form.useForm();
  const createProduct = async (product: IProduct) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        product
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      navigate("/product");
    },
  });

  const handleSubmit = (values: IProduct) => {
    mutation.mutate(values);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{ width: "600px" }}
        >
          <Form.Item name="name" label="Name" rules={[{required: true, message: "Please input your name!"}]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{required: true, message: "Please input your price!"}]}>
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Category" rules={[{required: true, message: "Please input your category!"}]}>
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

export default CreateProduct;
