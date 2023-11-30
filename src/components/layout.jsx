import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { Container, Row, Col } from "react-bootstrap";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <div className="page-content">{props.children}</div>
      <Footer />
    </>
  );
}
