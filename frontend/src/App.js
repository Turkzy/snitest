import { BrowserRouter, Routes, Route } from "react-router-dom";

/* LOGIN */
import Login from './pages/Login/Login';
import About from './pages/About/about';
import LoginNavbar from './components/LoginNavbar';
import Footer from './components/Footer';

/* COMPONENTS ADMIN*/
import DashboardNavbar from './components/DashboardNavbar';

/* DASHBOARD ADMIN*/
import Sidebar from './pages/Sidebar/Sidebar';
import Dashboard from './pages/DashboardAdmin/AdminDashboard';
import Products from './pages/ProductList/ProductsList';
import ManageCategory from './pages/ManageCategories/ManageCategory'
import SystemManagement from './pages/SystemManagement/SystemManagement';

import AddPanel from './pages/AddProduct/AddProduct';
import EditPanel from './pages/EditProduct/EditProduct';

import AddProductPanel from './pages/AddProduct/AddProductPanel';
import EditProduct from './pages/EditProduct/EditProductPanel';
import SalesReport from './pages/SalesReport/SalesReport';
import LoadingScreen from './pages/LoadingScreen/LoadingScreen';
import DeletePanel from './pages/DeleteProduct/DeleteProduct';


/* COMPONENTS EMPLOYEE*/
import EmployeeNavbar from './components/EmployeeNavbar'
/* DASHBOARD EMPLOYEE*/
import UserDashboard from './pages/DashboardUser/UserDashboard'
import SidebarUser from "./pages/SidebarUser/SidebarUser";
import POS from './pages/POS/POS';
import ProductsListUser from "./pages/ProductListUser/ProductsListUser";

const LoginPanel = () => {
  return (
    <>
      <LoginNavbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
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
        <Route path="/AddPanel" element={<AddPanel/>}/>
        <Route path="/Add" element={<AddProductPanel/>}/>
        <Route path="/EditPanel" element={<EditPanel/>}/>
        <Route path="/DeletePanel" element={<DeletePanel/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="/SalesReport" element={<SalesReport/>}/>
        <Route path="/SystemManagement" element={<SystemManagement/>}/>
        <Route path="/LoadingScreen" element={<LoadingScreen/>}/>

        <Route path="/managecategories" element={<ManageCategory/>}/>

      </Routes>
    </>
  );
};

const UserDashBoardPanel = () => {
  return (
    <>
    <EmployeeNavbar/>
    <SidebarUser/>
    <Routes>
      <Route path="/" element={<UserDashboard/>}/>
      <Route path="/POS" element={<POS/>}/>
      <Route path="/ProductsListUser" element={<ProductsListUser/>}/>
      
    </Routes>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard/*" element={<DashboardPanel />} />
          <Route path="/*" element={<LoginPanel />} />
          <Route path="/UserDashboard/*" element={<UserDashBoardPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
