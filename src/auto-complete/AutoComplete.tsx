const AutoComplete = ({
  value,
  items,
  loading = false,
  onSearch,
  onSelect,
}: {
  value: string;
  items: Array<any>;
  loading: boolean;
  onSearch: (params: string) => void;
  onSelect: (params: string) => void;
}) => {
  //onChange
  return <div>{items}</div>;
};

export default AutoComplete;
