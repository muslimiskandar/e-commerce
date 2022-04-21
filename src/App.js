import AllProducts from "./components/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Track from "./pages/Track";
import Men from "./pages/collection/Men";
import Women from "./pages/collection/Women";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SingleProduct from "./components/SingleProduct";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/track" element={<Track />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
