import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
