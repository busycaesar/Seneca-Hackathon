import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { Container, Row, Col } from "react-bootstrap";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <div style={{ margin: "0.5em 1.5em" }}>{props.children}</div>
      <Footer />
    </>
  );
}
