import React, { useEffect, useState } from "react";
import BoxSearch from "../../../../component/BoxSearch";
import { Col, Row, Select } from "antd";
import "./Search.scss";
import WrapBox from "../../../../layout/HomeLayout/WrapBox";

const Search = () => {
  const [careers, setCareers] = useState([]);
  const handleSearch = (key) => {};
  const WrapBoxSearch = () => {
    return (
      <Row
        style={{ backgroundColor: "#D9D9D9", padding: "20px 200px" }}
        className="wrap-search"
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Col span={12}>
            <BoxSearch handleSearch={handleSearch} />
          </Col>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center", paddingTop: 2 }}>
          <Col span={3}>
            <Select
              placeholder="Ngành nghề"
              style={{ width: "100%", borderRadius: 0 }}
              options={careers}
            />
          </Col>
          <Col span={3}>
            <Select placeholder="Công ty" style={{ width: "100%" }} />
          </Col>
          <Col span={3}>
            <Select placeholder="Địa điểm làm việc" style={{ width: "100%" }} />
          </Col>
          <Col span={3}>
            <Select placeholder="Mức lương" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Row>
    );
  };
  return (
    <Col span={24}>
      <WrapBoxSearch />
      <Col style={{ padding: "40px 10% 40px 10%" }}>
        <WrapBox
          title={"Công việc đang có"}
          isShowAll={false}
          isPagination={true}
        />
      </Col>
    </Col>
  );
};

export default Search;
