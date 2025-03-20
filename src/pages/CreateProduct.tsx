import { Button, Form, Input, InputNumber, Select } from "antd";

interface IProduct {
  name: string;
  price: number;
  description: string;
  category: string;
}
const CreateProduct = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const handleSubmit = (values: IProduct) => {
    console.log("submit", values);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form form={form} onFinish={handleSubmit} layout="vertical" style={{ width: "600px"}} >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name='price' label="Price">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Category">
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
