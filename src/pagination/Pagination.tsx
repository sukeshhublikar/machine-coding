import { useMemo } from "react";
import { LeftIcon, RightIcon } from "../Icons";
import "./style.css";

const Pagination = ({
  current,
  total,
  onChange,
  size = 10,
}: {
  current: number;
  total: number;
  onChange: (page: number) => void;
  size?: number;
}) => {
  const handleNext = () => {
    onChange(current + 1);
  };

  const handlePrev = () => {
    if (current == 0) {
    }
    onChange(current - 1);
  };
  const handlePageClick = (page: number) => {
    onChange(page);
  };

  const pagesPrev = useMemo(() => {
    return Array.from({ length: 3 }, (_, idx) => current - 1 - idx)
      .filter((val) => val > 0)
      .reverse();
  }, [current, total]);

  const pagesNext = useMemo(() => {
    return Array.from({ length: 4 }, (_, idx) => current + idx).filter(
      (val) => val <= Math.ceil(total / size)
    );
  }, [current, total]);

  const noOfPages = useMemo(() => {
    return Math.ceil(total / size);
  }, [total, size]);

  return (
    <div className="pagination-container">
      <button
        className="left-btn"
        onClick={() => handlePrev()}
        disabled={current === 1}
      >
        <LeftIcon />
      </button>

      {[...pagesPrev, ...pagesNext].map((page) => {
        return (
          <button
            className={`page-btn ${current === page ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
            key={page}
          >
            {page}
          </button>
        );
      })}
      <button
        className="right-btn"
        onClick={() => handleNext()}
        disabled={current >= noOfPages}
      >
        <RightIcon />
      </button>
    </div>
  );
};

export default Pagination;
