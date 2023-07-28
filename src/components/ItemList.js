import Item from "./Item";
import { useState } from "react";

function ItemList({ list }) {
  const [index, setIndex] = useState(0);

  function handleIndex(idx) {
    setIndex((p) => {
      if (p === idx) {
        return null;
      }
      return idx;
    });
  }

  return (
    <div className="list">
      {list.map((obj) => {
        return (
          <Item
            obj={obj}
            index={index}
            setIndex={setIndex}
            handleIndex={handleIndex}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
