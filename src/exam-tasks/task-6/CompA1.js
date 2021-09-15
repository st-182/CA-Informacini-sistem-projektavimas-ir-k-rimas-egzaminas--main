import React, { useContext } from "react";
import { PassingState } from "./Task6";

function CompA1() {
  const context = useContext(PassingState);
  const { state, setState } = context;
  return (
    <div>
      <h5>CompA1</h5>
      <button
        onClick={() => {
          if (state < 100) setState(state + 10);
        }}
      >
        +10
      </button>
      <button onClick={() => setState(state - 10)}>-10</button>
    </div>
  );
}

export default CompA1;
