import { Outlet } from 'react-router-dom';
import PageNav from './PageNav';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function AppLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default AppLayout;
