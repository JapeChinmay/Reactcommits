import React, { Fragment, useState } from "react";
import axios from "axios";

const Takehome2 = () => {
  const [error, setError] = useState(false);

  const [buttonValue, setButtonValue] = useState("random");
  const [isLoading, setIsLoading] = useState(false);
  const [random, setRandom] = useState(() => {
    const onLoad = async () => {
      setIsLoading(true);
      try {
        return await axios({
          url: "https://dog.ceo/api/breeds/image/random",
        });
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    (async () => {
      const res = await onLoad();
      const ans = res.data.message;
      console.log(ans);

      setRandom(ans);
      setIsLoading(false);
    })();
  });

  const renderAfterClick = (e) => {
    setIsLoading(true);

    const v = e.target.value;
    if (v === "random") {
      const render = async () => {
        try {
          return await axios({
            url: "https://dog.ceo/api/breeds/image/random",
          });
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };

      (async () => {
        const ans = await render();
        setRandom(ans.data.message);
        setIsLoading(false);
        setButtonValue(v);
      })();
    } else {
      const render1 = async () => {
        setIsLoading(true);
        try {
          return await axios({
            url: `https://dog.ceo/api/breed/${v}/images/random`,
          });
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };
      (async () => {
        const ans1 = await render1();
        setRandom(ans1.data.message);
        setIsLoading(false);
        setButtonValue(v);
      })();
    }
  };

  const breedselectHandler = (e) => {
    setIsLoading(true);
    const v = e.target.value;
    console.log(v);

    if (v !== "random") {
      const breed = async () => {
        try {
          return await axios({
            url: `https://dog.ceo/api/breed/${v}/images/random`,
          });
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };

      (async () => {
        const response = await breed();
        const breedimage = response.data.message;
        setRandom(breedimage);
        setIsLoading(false);
        setButtonValue(v);
      })();
    } else {
      const randomBreed = async () => {
        try {
          return await axios({
            url: `https://dog.ceo/api/breeds/image/random `,
          });
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };

      (async () => {
        const res = await randomBreed();
        const randomimg = res.data.message;
        setRandom(randomimg);
        setIsLoading(false);
        setButtonValue(v);
      })();
    }
  };

  return (
    <Fragment>
      <label htmlFor="cars">Choose a breed:</label>
      <select name="dogs" id="dogs" onChange={breedselectHandler}>
        <option value="random">Random</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="husky">Husky</option>
      </select>

      <div>
        {!isLoading && !error && <img src={random} alt="Dog images" />}
        {isLoading && !error && <p>Loading...🔃</p>}
        {!isLoading && error && <p>Could Not Fetch Data 💔</p>}
      </div>

      <div>
        <button value={buttonValue} onClick={renderAfterClick}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default Takehome2;
