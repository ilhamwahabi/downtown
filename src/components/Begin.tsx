import React, { useState, useEffect } from "react";
import { Typography, TimePicker } from "antd";
import moment from "moment";

const { Title } = Typography;

const Begin = () => {
  const [beginTime, setBeginTime] = useState(moment());
  const [userHasSelect, setUserHasSelect] = useState(false);

  const onBeginTimeChange = (time: moment.Moment, timeString: string) => {
    setUserHasSelect(true);
    setBeginTime(time);
  };

  useEffect(() => {
    if (!userHasSelect) setBeginTime(moment());
  }, [beginTime]);

  return (
    <>
      <Title>When timer will begin?</Title>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <TimePicker value={beginTime} onChange={onBeginTimeChange} />
      </div>
    </>
  );
};

export default Begin;
