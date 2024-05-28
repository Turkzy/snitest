import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginNavbar from './components/LoginNavbar';
import About from './pages/about';
import DashboardNavbar from './components/DashboardNavbar';
import Products from './pages/ProductsPanel';
import Sidebar from './pages/Sidebar';
import AddPanel from './pages/AddPanel';
import EditPanel from './pages/EditPanel';
import SystemManagement from './pages/SystemManagement';
import AddProductPanel from './pages/AddProductPanel';
import Dashboard from './pages/Dashboard';
import EditProduct from './pages/EditProduct';
import Sales from './pages/Sales';
import SalesReport from './pages/SalesReport';
import LoadingScreen from './pages/LoadingScreen';
import DeletePanel from './pages/DeletePanel';
import Footer from './components/Footer';
import UserDashboard from './pages/UserDashboard'
import EmployeeNavbar from './components/EmployeeNavbar'
import ManageCategory from './pages/ManageCategory'
import Category from './pages/CategoriesPanel'

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
        <Route path="/Sales" element={<Sales/>}/>
        <Route path="/SalesReport" element={<SalesReport/>}/>
        <Route path="/SystemManagement" element={<SystemManagement/>}/>
        <Route path="/LoadingScreen" element={<LoadingScreen/>}/>

        <Route path="/categories" element={<Category/>}/>
        <Route path="/managecategories" element={<ManageCategory/>}/>

      </Routes>
    </>
  );
};

const UserDashBoardPanel = () => {
  return (
    <>
    <EmployeeNavbar/>
    <Routes>
      <Route path="/" element={<UserDashboard/>}/>
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
