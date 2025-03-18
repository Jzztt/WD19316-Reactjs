import { Route, Routes } from "react-router";
import "./App.css";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Products />} />
          <Route path="user" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
