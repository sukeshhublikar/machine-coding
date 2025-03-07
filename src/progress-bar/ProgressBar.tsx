import { useEffect, useState } from "react";
import "./style.css";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> | null = null;
    interval = setInterval(() => {
      console.log("interval");
      setWidth((prev) => {
        if (prev >= 100) {
          interval && clearInterval(interval);
        }
        return Math.min(prev + 10, 100);
      });
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ transform: `translateX(-${100 - width}%)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
