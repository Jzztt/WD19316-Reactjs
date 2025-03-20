import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import { NavLink } from "react-router";

const Products = () => {
  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  };
  const { data: dataSource, isLoading } = useQuery({
    queryKey: ["products"], // caching
    queryFn: fetchProducts,
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <>
      <Button type="primary">
        <NavLink to={"/product/create"}>Create product</NavLink>
      </Button>
      <Table dataSource={dataSource} columns={columns} loading={isLoading} />
    </>
  );
};

export default Products;
