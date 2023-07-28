import { useState, useEffect, useRef } from "react";
function Item({ obj, index, setIndex, handleIndex }) {
  const id = useRef();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (index > 4) {
      setValue(0);
    }
    if (index === obj.id) {
      console.log(obj.id);
      id.current = setTimeout(() => {
        if (value >= 100) {
          setIndex((i) => {
            if (i > 4) {
              return 0;
            }
            return i + 1;
          });
        }
        setValue((p) => {
          return p + 10;
        });
      }, 1000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [index, value]);
  useEffect(() => {}, [index]);
  return (
    <div className="item">
      <div className="outer">
        <div
          style={{
            display: index > 4 || value > 100 ? "none" : "block",
            width: `${value}%`,
            height: "5px",
            borderRadius: "10px",
            backgroundColor: "lightgrey",
            transition: "1s linear",
            transitionProperty: "width, background-color",
          }}></div>
      </div>
      <div className="title">
        {obj.title}{" "}
        <span
          onClick={() => {
            handleIndex(obj.id);
          }}>
          {index === obj.id ? "➖" : "➕"}
        </span>
      </div>
      <div className={index === obj.id ? "content show" : "content"}>
        {obj.content}
      </div>
    </div>
  );
}

export default Item;
