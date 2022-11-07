import { Outlet } from 'react-router-dom';
import Header from '../Components/newHeader';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
