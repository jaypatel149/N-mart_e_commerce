import Navbar from "./components/Navbar";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Footer from "./components/Footer";
import Cart from "./components/page/Cart";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Products from "./components/page/Products";
import ProductDetails from "./components/page/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/productdetail/:id" element={<ProductDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
