import Footer from "./components/footer/Footer.jsx";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Products from "./components/products/Products.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="ui fixed inverted main menu" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
