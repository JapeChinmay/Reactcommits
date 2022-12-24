import React, { Fragment, useEffect, useState } from "react";

const RandomData = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchCount, setFetchCount] = useState(0);
  const [people, setPeople] = useState([]);

  const fetching = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data);

    setUserData(data.results);
    setLoading(false);
    setFetchCount(fetchCount + 1);
  };

  const fetching2 = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    console.log(data.results);
    return data.results;
  };

  useEffect(() => {
    fetching2().then((people) => {
      setPeople(people);
    });
  }, []);

  return (
    <div>
      <button onClick={fetching}>click</button>
      {!loading ? (
        <div>
          {userData.map((user) => {
            return (
              <Fragment>
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>

                <p>{`user${fetchCount} , netxt user is ${fetchCount + 1}`}</p>
                <br />
                <img src={user.picture.large} alt="User Image" />
                <br />

                {people.map((person, id) => {
                  return (
                    <div
                      key={id}
                    >{` location${id} :${person[fetchCount]?.location?.city}  `}</div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      ) : (
        <p>Laoding</p>
      )}
    </div>
  );
};

export default RandomData;
