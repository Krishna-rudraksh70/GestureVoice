import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "GestureVoice",
  description: "Official Website for GestureVoice devs",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;