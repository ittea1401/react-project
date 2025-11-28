// ProductsPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import getData from "./data";
import MenuFilter from "../MenuFilter/MenuFilter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserCard from "../UserCard/UserCard";
import Timer from "../Timer/Timer";

const Main = () => {
  const [users, setUsers] = React.useState([]);
  const location = useLocation();

  React.useEffect(() => {
    getData().then((data) => setUsers(data));
  }, []);

  const getFilter = () => {
    if (location.pathname.includes("/men")) return "male";
    if (location.pathname.includes("/woman")) return "female";
    return "all";
  };

  const filter = getFilter();
  const filtered =
    filter === "all" ? users : users.filter((u) => u.gender === filter);

  return (
    <div>
      <Header/>
      <Timer/>

      <MenuFilter />
      <hr />
      <div className="w-15/16 mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {filtered.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}{" "}
      </div>


      <Footer />
    </div>
  );
};

export default Main;
