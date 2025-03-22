import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Popconfirm, Table } from "antd";
import axios from "axios";
import { NavLink } from "react-router";
import { IProduct } from "./CreateProduct";

const Products = () => {
  const queryClient = useQueryClient();
  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  };
  const { data: dataSource, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const deleteProduct = async (id: number) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/products/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
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
    {
      title: "Action",
      key: "action",
      render: (record: IProduct) => (
        <div>
          <Button type="primary">
            <NavLink to={`/product/edit/${record.id}`}>Edit</NavLink>
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => mutation.mutate(record.id as number)}
          >
            <Button color="danger" variant="solid">
              {" "}
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
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
