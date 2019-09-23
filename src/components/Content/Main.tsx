import React from "react";
import { Row, Col, Button } from "antd";

const Main = () => {
  return (
    <>
      <Row style={{ width: "10%", marginTop: "75px" }}>
        <Col>
          <Button type="primary" size="large" block>
            Start
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Main;
