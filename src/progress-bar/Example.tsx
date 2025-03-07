import { useState } from "react";
import ProgressBar from "./ProgressBar";
export function Example() {
  const [show, toggle] = useState(false);

  return (
    <div>
      {show ? <ProgressBar /> : null}
      <button
        className="toggle-progress-bar"
        onClick={() => {
          toggle(!show);
        }}
      >
        {show ? "Hide" : "Show"} Progress Bar
      </button>
    </div>
  );
}
