import Nav from "../components/Header/index";
import Footer from "../components/Footer/index";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
