import React, { useState, useRef } from "react";
import Card from "../Card";
import classes from "./AddUser.module.css";
import Button from "../Button";
import ErrorModal from "../ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [err, setErr] = useState();

  const AdduserHandler = (event) => {
    event.preventDefault();

    const Name = nameInputRef.current.value;
    const Age = ageInputRef.current.value;

    if (Name.trim().length === 0 || Age.trim().length === 0) {
      setErr({
        title: "Invalid Input",
        error: "Please Enter Valid Values form Username and Age",
      });
      return;
    }
    if (+Age < 1) {
      setErr({ title: "Invalid age", error: "enter valid age" });
    }
    props.onAddUser(Name, Age);
  };

  const errorHandler = () => {
    setErr(null);
  };
  return (
    <div>
      {err && (
        <ErrorModal title={err.title} error={err.error} onOkay={errorHandler} />
      )}
      <Card className={classes.input}>
        <form onSubmit={AdduserHandler}>
          <lable htmlFor="username">Username</lable>
          <input
            type="text"
            //value={enteredUsername}
            id="username"
            ref={nameInputRef}
          />
          <lable htmlFor="age">Age</lable>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            //onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
