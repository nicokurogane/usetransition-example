import { useState } from "react";
import ListItem from "../listItem/ListItem";

const FilterList = ({ names=[] }) => {
  const [query, setQuery] = useState("");

  const changeHandler = ({ target: { value } }) => setQuery(value);

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      {names.map((name, i) => (
        <ListItem key={i} name={name} highlight={query} />
      ))}
    </div>
  );
};

export default FilterList;
