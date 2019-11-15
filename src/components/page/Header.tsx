import React from "react";

import { useContextReducer } from "../../context";

const Header: React.FC = () => {
  const {
    stage: [stage]
  } = useContextReducer();

  if (stage === "input") return null;
  return <header>header</header>;
};

export default Header;
