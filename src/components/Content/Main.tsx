import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Row, Col, Button } from "antd";

const Main = () => {
  return (
    <>
      <Row className={css(styles.buttonRow)}>
        <Col>
          <Button type="primary" size="large" block>
            Start
          </Button>
        </Col>
      </Row>
    </>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    width: "10%",
    marginTop: "75px"
  }
});

export default Main;
