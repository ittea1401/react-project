// MenuFilter.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuFilter = ({ onFilter }) => {
  const location = useLocation();

  let filter = "all";
  if (location.pathname.includes("/men")) filter = "male";
  if (location.pathname.includes("/woman")) filter = "female";

  React.useEffect(() => {
    if (onFilter) onFilter(filter);
  }, [filter, onFilter]);

  const items = [
    { id: "all", label: "ALL", path: "/main" },
    { id: "men", label: "Men", path: "/main/men" },
    { id: "woman", label: "Woman", path: "/main/woman" },
  ];

  return (
    <nav style={{ display: "flex", gap: 12 }}>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">

      {items.map((item) => (
        <li>

        <NavLink
          key={item.id}
          to={item.path}
          end={item.id === "all"}
          style={({ isActive }) => ({
            background: isActive ? "#e7f0ff" : "white",
            fontWeight: isActive ? 700 : 500,

            color: isActive ? "#f00" : "#000"
          })}
        >
          {item.label}
        </NavLink>
        </li>
      ))}
      </ul>

    </nav>
  );
};

export default MenuFilter;
