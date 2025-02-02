import { useState, useCallback } from "react";
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  //State which holds new menu item input
  let [newMenuItem, setNewMenuItem] = useState("");

  //State which holds the list of menu items
  let [menuItems, setMenuItems] = useState([
    "Albert Eggstein",
    "Attila the Hen",
    "Dixie Chick",
    "Gregory Peck",
    "Mary Poopins",
  ]);

  // let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("");

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems([newMenuItem, ...menuItems]);
      setNewMenuItem("");
    }
  }, [newMenuItem, menuItems]);

  //Filter the menu items based on the text
  const filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Add a new menu item"
      />
      <br />

      <button onClick={addMenuItem}>Add Item</button>
      <br />

      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
