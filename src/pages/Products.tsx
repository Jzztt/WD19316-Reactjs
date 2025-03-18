import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

const Products = () => {
  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  };
  const { data: dataSource, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} loading={isLoading} />;
    </>
  );
};

export default Products;
