import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginNavbar from './components/LoginNavbar';
import About from './pages/about';
import DashboardNavbar from './components/DashboardNavbar';
import Products from './pages/ProductsPanel';
import Sidebar from './pages/Sidebar';
import AddProduct from './pages/AddProduct';
import SystemManagement from './pages/SystemManagement';
import AddProductPanel from './pages/AddProductPanel';
import Dashboard from './pages/Dashboard';
import EditProduct from './pages/EditProduct';
import Sales from './pages/Sales';
import SalesReport from './pages/SalesReport';

const LoginPanel = () => {
  return (
    <>
      <LoginNavbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

const DashboardPanel = () => {
  return (
    <>
      <DashboardNavbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/Addproduct" element={<AddProduct/>}/>
        <Route path="/Add" element={<AddProductPanel/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="/Sales" element={<Sales/>}/>
        <Route path="/SalesReport" element={<SalesReport/>}/>
        <Route path="/SystemManagement" element={<SystemManagement/>}/>
      </Routes>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard/*" element={<DashboardPanel />} />
          <Route path="/*" element={<LoginPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
