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
import AddAccount from './pages/AddAccount';
import Footer from './components/Footer';
import EditAccount from './pages/EditAccount';

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
        <Route path="/AddAccount" element={<AddAccount/>}/>
        <Route path="/EditAccount/:id" element={<EditAccount/>}/>
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
