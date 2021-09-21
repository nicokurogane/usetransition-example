// TODO 1 - Import useTransition
import { useState, useTransition } from "react";
import ListItem from "../listItem/ListItem";

const FilterList = ({ names = [] }) => {
  const [query, setQuery] = useState(""); //this is what the user inputs

  // TODO 2- Identify those updates that will be delayed by startTransition function
  const [highlight, setHighLight] = useState(""); //this state update that will be delayed;

  // TODO 3- declare the hook: as useState, the function is the second deconstructed parameter.
  const [isPending, startTransition] = useTransition();

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    // TODO 4- Pass as a callback the pieces you already identified
    startTransition(() => setHighLight(value));
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      {
        // TODO 5- Enjoy :D
      }
      {names.map((name, i) => (
        <ListItem key={i} name={name} highlight={highlight} />
      ))}
    </div>
  );
};

export default FilterList;
