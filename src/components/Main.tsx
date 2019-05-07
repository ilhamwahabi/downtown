import React from "react";
import { Typography, Row, Col, Button } from "antd";

const { Title, Text } = Typography;

const Main = () => {
  return (
    <>
      <Row style={{ width: "75%", textAlign: "center" }}>
        <Col span={8}>
          <Title level={3}>Time Start</Title>
          <Title level={1}>13:30:00</Title>
        </Col>
        <Col span={8}>
          <Text>90 minutes</Text>
        </Col>
        <Col span={8}>
          <Title level={3}>Time Finish</Title>
          <Title level={1}>15:00:00</Title>
        </Col>
      </Row>
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
