import { Outlet } from "react-router-dom";
import Header from "../Components/newHeader";

const Layout = () => { 
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default Layout;