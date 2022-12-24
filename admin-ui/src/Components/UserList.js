import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import "./userList.css";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userToSearch, setUserToSearch] = useState("");
  const [error, setError] = useState(false);

  const [pCount, setPCount] = useState(0);

  const itemsPerPage = 10;

  let visited = pCount * itemsPerPage;

  const total = Math.ceil(users.length / itemsPerPage);

  const pageChangeHandler = (event) => {
    console.log(event.selected);
    setPCount(event.selected);
  };

  const userSearchHandler = (e) => {
    setUserToSearch(e.target.value);
    console.log(userToSearch);
  };

  const deleteUserHandler = (userTodelete) => {
    let restOfData = users.filter((users) => {
      return users.id !== userTodelete;
    });
    setUsers(restOfData);
  };

  useEffect(() => {
    getUserDetails();
    console.log("called");
  }, []);

  async function getUserDetails() {
    try {
      const response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );

      setUsers(response.data);
    } catch (err) {
      if (err) {
        setError(true);
      }
      console.log(err);
    }
  }

  return (
    <Fragment>
      <div className="container">
        <br />
        <input
          style={{ color: "white" }}
          name="name"
          type="text"
          placeholder="Search🔍"
          onChange={userSearchHandler}
        />
        <div>
          {!error ? (
            <table className="table">
              <tr>
                <th>
                  <input type="checkbox" />{" "}
                </th>
                <th>Name </th>
                <th>Email </th>
                <th> Role</th>
                <th>Action</th>
              </tr>

              {users

                .filter((users) => {
                  if (userToSearch === "") return users;
                  else if (
                    users.name.includes(userToSearch) ||
                    users.email.includes(userToSearch) ||
                    users.role.includes(userToSearch)
                  ) {
                    return users;
                  }
                })
                .slice(visited, visited + itemsPerPage)
                // slicing the users as per
                .map((users) => (
                  <tr key={users.id}>
                    <input style={{ padding: 10 }} type="checkbox" />

                    <td style={{ padding: 10 }}>{users.name}</td>
                    <td style={{ padding: 10 }}>{users.email}</td>
                    <td style={{ textTransform: "uppercase", padding: 10 }}>
                      `{users.role}
                    </td>
                    <td className="button">
                      <button className="edit">Edit🔨</button>
                      <button
                        style={{ backgroundColor: "red" }}
                        onClick={() => deleteUserHandler(users.id)}
                      >
                        Delete😔
                      </button>
                    </td>
                  </tr>
                ))}
            </table>
          ) : (
            <p>Something went wrong❌</p>
          )}
        </div>
      </div>

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={2}
        pageCount={total}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Fragment>
  );
};

export default UserList;
