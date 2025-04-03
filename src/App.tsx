import { Route, Routes } from "react-router";
import "./App.css";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import LifeCycleComponent from "./pages/LifeCycleComponent";
import LearReducer from "./pages/LearReducer";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Products />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/edit/:id" element={<EditProduct />} />
          <Route path="user" element={<Users />} />
          <Route path="life-cycle" element={<LifeCycleComponent />} />
          <Route path="learn-reducer" element={<LearReducer />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
