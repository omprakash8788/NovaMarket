import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Allproducts = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Allproducts;
