import React from "react";
import Card from "../Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        <h2>New users</h2>
        {props.users.map((user) => (
          <li>
            {user.id}
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
