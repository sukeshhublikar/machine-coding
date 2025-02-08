interface IDropdown {
  items: Array<any>;
  show: boolean;
  loader: boolean;
  onSelect: (params: string) => void;
  selected: string;
}
export const Dropdown = ({
  items = [],
  show,
  loader,
  onSelect,
  selected,
}: IDropdown) => {
  if (!show) {
    return null;
  }

  if (loader) {
    return (
      <div className="dropdown">
        <div className="no-items">Loading.... </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="dropdown">
        <div className="no-items">No Items </div>
      </div>
    );
  }

  return (
    <div className="dropdown">
      {items.map((item) => (
        <div
          role="button"
          className="item"
          onClick={() => onSelect(item.title)}
          key={item.id}
        >
          {item.title}
          {item.title === selected ? (
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          ) : null}
        </div>
      ))}
    </div>
  );
};
