import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  );
}
