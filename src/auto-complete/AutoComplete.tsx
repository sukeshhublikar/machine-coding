import { useEffect, useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import "./style.css";

const AutoComplete = ({
  value,
  items,
  loading,
  onSearch,
  onSelect,
}: {
  value: string;
  items: Array<any>;
  loading: boolean;
  onSearch: (params: string) => void;
  onSelect: (params: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const handleClickAway = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(".autocomplete-container")) return;
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, []);
  const toggleDropdown = (status: boolean) => {
    setShow(status);
  };

  const onInputChange = (val: string) => {
    setQuery(val);
    onSelect("");
    onSearch(val);
  };

  const onRemove = () => {
    onSelect("");
    setQuery("");
    setShow(false);
  };

  return (
    <div className="autocomplete-container">
      <input
        className="input-box"
        placeholder="Search..."
        value={value || query}
        onFocus={() => toggleDropdown(true)}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {value ? (
        <button className="close-btn" onClick={() => onRemove()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      ) : null}
      <Dropdown
        items={items}
        show={show}
        onSelect={(val) => {
          onSelect(val);
          setShow(false);
        }}
        loader={loading}
        selected={value}
      />
    </div>
  );
};

export default AutoComplete;
