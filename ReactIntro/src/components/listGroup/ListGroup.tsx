import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function convertItemList() {
    return items.map((item, index) => (
      <ul className="list-group">
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
          }}
        >
          {item}
        </li>
      </ul>
    ));
  }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : convertItemList()}
    </>
  );
}

export default ListGroup;
