import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrintForm from "./components/Form/PrintForm";
import Navbar from "./components/Navbar/Navbar";
import Shops from "./components/Shops/Shops";
import AddShop from "./components/Form/AddShop";
import LogIn from "./components/Form/LogIn";
import DashBoard from "./components/Dashboard/DashBoard";
import Home from "./components/Home";
import Error404 from "./components/404/Error404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/shop/:id" element={<PrintForm />} />
        <Route exact path="/" element={<Home />} >
        </Route>
        <Route exact path="add-shop" element={<AddShop />} />
        <Route exact path="*" element={<Error404/>} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
