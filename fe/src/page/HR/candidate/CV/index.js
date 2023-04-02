import React from "react";
import { Col, Row } from "antd";
import Banner from "./Banner";
import Detail from "./Detail";
const CV = () => {
  return (
    <Col style={{ backgroundColor: "white", padding: "30px 60px 40px 60px" }}>
      <Row>
        <Col
          span={24}
          style={{
            border: "1px solid var(--color-gray-card-user)",
            borderRadius: 10,
          }}
          className="box-shadow-bottom"
        >
          <Banner />
          <Detail />
        </Col>
      </Row>
    </Col>
  );
};

export default CV;
