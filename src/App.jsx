import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import All from "./pages/All/All";
import BlogFooter from "./pages/BlogFooter/BlogFooter";
import Home from "./pages/Home/Home";
import { Faq } from "./pages/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import About from "./pages/Aboutus/About";
import { Laptopsinfo } from "./pages/Laptopsinfo/Laptopsinfo";
import { Account } from "./pages/Account/Account";
import { Perconal } from "./pages/Account/Perconal/Perconal";
import { Payment } from "./pages/Account/Payments/Payment";
import { Paysingle } from "./pages/Account/Paysingle/Paysingle";
import { Orders } from "./pages/Account/Orders/Orders";
import { Currentsingle } from "./pages/Account/Currentsingle/Currentsingle";
import { Delivered } from "./pages/Account/Delivered/Delivered";
import { Wishlist } from "./pages/Account/Wishlist/Wishlist";
import { BlogSingle } from "./pages/BlogSingle/BlogSingle";
import { Discount } from "./pages/Account/Discount/Discount";
import { Securiti } from "./pages/Account/Securiti/Securiti";
import { Notification } from "./pages/Account/Notifications/Notification";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Laptopsinfo" element={<Laptopsinfo />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogsingle" element={< BlogSingle/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blogfooter" element={<BlogFooter />} />
        <Route path="/returns" element={""} />
        <Route path="/order" element={""} />
        <Route path="/perconal" element={<Perconal />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paysingle" element={<Paysingle />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/currentsingle" element={<Currentsingle />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/securiti" element={<Securiti />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
