import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../SideBar/Sidebar";
import "./Styles.scss";

const Hoc = (props) => {
  return (
    <Container>
      <Row className="d-flex">
        <Sidebar />
        <Col className="main-side">{props.children}</Col>
      </Row>
    </Container>
  );
};

export default Hoc;
