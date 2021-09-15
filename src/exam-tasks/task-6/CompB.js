import React, { useContext } from "react";
import { PassingState } from "./Task6";
function CompB() {
  const context = useContext(PassingState);
  const { state, setState } = context;
  return (
    <div>
      <h4>CompB</h4>

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

export default CompB;
