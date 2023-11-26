import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <div style={{ margin: "0.5em 1.5em" }}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}
