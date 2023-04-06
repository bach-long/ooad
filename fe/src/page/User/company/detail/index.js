import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Card from "../search/Card";
import DescriptionBox from "../../../../component/DescriptionBox";
import WrapBox from "../../../../layout/HomeLayout/WrapBox";
import { useParams } from "react-router-dom";
import { detailCompany } from "../../../../service/Company/index";
const CompanyDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getInfoCompany(id);
  }, []);

  const getInfoCompany = async (id) => {
    const res = await detailCompany(id);
    if (res.success === 1 && res.data) {
      setData(res.data);
    }
  };

  return (
    <>
      <Card banner={true} />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <Row key={index}>
              <DescriptionBox
                name={item.name}
                des={item.des}
                paddingLeft={120}
              />
            </Row>
          );
        })}
      <Col style={{ padding: "40px 10% 40px 10%" }}>
        <WrapBox
          title={"Các vị trí công ty đang đăng tuyển"}
          isShowAll={false}
          isPagination={true}
        />
      </Col>
    </>
  );
};

export default CompanyDetail;
