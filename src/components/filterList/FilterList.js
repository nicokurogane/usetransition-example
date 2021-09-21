// TODO 1 - Import useTransition
import { useState, useTransition } from "react";
import ListItem from "../listItem/ListItem";

const FilterList = ({ names = [] }) => {
  const [query, setQuery] = useState(""); //this is what the user inputs
  const [highlight, setHighLight] = useState(""); //this state update that will be delayed;

  // TODO 2- declare the hook: as useState, the isPending is the first deconstructed parameter.
  const [isPending, startTransition] = useTransition();

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => setHighLight(value));
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      <div className={isPending ? "rendering-data" : ""}>
        {names.map((name, i) => (
          <ListItem key={i} name={name} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
