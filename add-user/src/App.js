import "./App.css";
import AddUser from "./Components/UI/USERS/AddUser";
import UsersList from "./Components/UI/USERS/UsersList";

import React, { Fragment, useState } from "react";

const App = (props) => {
  const [userList, setUserList] = useState([]);

  const getAddedData = (uName, uAge) => {
    setUserList((prev) => {
      return [
        ...prev,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={getAddedData} />;
      <UsersList users={userList} />
    </Fragment>
  );
};

export default App;
