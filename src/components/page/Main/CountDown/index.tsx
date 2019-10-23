import React, { useState } from "react";

import Buttons from "./Buttons";
import Counter from "./Counter";

const CountDown = () => {
  const [counting, setCounting] = useState(true);

  const resumeCounting = () => setCounting(true);
  const pauseCounting = () => setCounting(false);

  return (
    <section>
      <Counter counting={counting} />
      <Buttons
        counting={counting}
        pauseCounting={pauseCounting}
        resumeCounting={resumeCounting}
      />
    </section>
  );
};

export default CountDown;
