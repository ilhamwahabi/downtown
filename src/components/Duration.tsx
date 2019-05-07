import React from "react";
import { Typography, Input } from "antd";

const { Title } = Typography;

const Duration = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event);

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) =>
    console.log(event);

  return (
    <>
      <Title>How long the duration?</Title>
      <div style={{ width: "25%", marginTop: "15px" }}>
        <Input
          style={{ textAlign: "center" }}
          placeholder="in minutes"
          onChange={onChange}
          onPressEnter={onPressEnter}
          size="large"
        />
      </div>
    </>
  );
};

export default Duration;
