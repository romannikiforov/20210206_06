import { useState, useCallback, useMemo } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import AppContext from "./contexts/AppContext";
import { defaultState } from "./data";

const App = () => {
  const [data, setData] = useState(defaultState);

  const unpackedFilter = () => data.filter((item) => !item.packed);

  const packedFilter = () => data.filter((item) => item.packed);

  const addNewItem = useCallback(
    (newItem) => setData((x) => [...x, newItem]),
    []
  );

  const delItem = useCallback(
    (id) => setData((data) => data.filter((item) => item.id !== id)),
    []
  );

  const unpackedALL = () =>
    setData((data) =>
      data.map((item) => (item.packed ? { ...item, packed: false } : item))
    );

  const toggle = useCallback(
    (id) =>
      setData((data) =>
        data.map((item) =>
          item.id === id
            ? { ...item, packed: (item.packed = !item.packed) }
            : item
        )
      ),
    []
  );

  const value = useMemo(() => ({ toggle, delItem }), [delItem, toggle]);

  return (
    <div className="container py-3">
      <NewItem addNewItem={addNewItem} />
      <div className="row">
        <AppContext.Provider value={value}>
          <div className="col-md-5">
            <ListItems title="Unpacked Items" items={unpackedFilter()} />
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems title="Packed Items" items={packedFilter()} />
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={unpackedALL}
            >
              Mark All As Unpacked
            </button>
          </div>
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
