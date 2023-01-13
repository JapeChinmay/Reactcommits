import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const User = (props) => {
  const [loading, setIsLoading] = useState(true);
  const [person, setPerson] = useState({
    name: "",
    lastName: "",
  });

  useEffect(() => {
    getUserDetails();
    console.log("clled");
  }, []);

  async function getUserDetails() {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const user = await res.json();

      console.log(user);
      setPerson({
        name: user.results[0].name.first,
        lastName: user.results[0].name.last,
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      {loading ? (
        <div>Laoding...</div>
      ) : (
        <div>
          {person.name} {person.lastName}
        </div>
      )}
    </Fragment>
  );
};

export default User;
