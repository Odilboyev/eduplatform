import { useState } from "react";

const NeumorButton = ({ children, click, ...rest }) => {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`${active ? "active" : ""} neoBtn`}
      onClick={() => {
        setActive(!active);
        click();
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default NeumorButton;
