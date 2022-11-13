import React, { Fragment, useState } from "react";
import Calendar from "react-calendar";

import axios from "axios";

const Appointment = () => {
  const [selected, setSelected] = useState(false);
  const [date, setDate] = useState(new Date());
  const [success, setSucces] = useState(false);
  const [clicked, setClicked] = useState(false);

  const changeHandler = (e) => {
    setSelected(true);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setSelected(false);
    setClicked(true);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setClicked(true);

    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/post ",
    })
      .then((res) => console.log(res))
      .catch((err) => {
        setSucces(false);
        console.log(err);
      });
    setSucces(true);
  };

  return (
    <Fragment>
      <div>
        {!selected && (
          <section>
            <h1>Book session</h1>
            <p>
              Fill in the form below to book virtual session with your Docktor
            </p>
            <form>
              <label htmlFor="firstname">First Name</label>

              <input id="firstname" type="text" name="firstname" />
              <br></br>

              <label htmlFor="lastname">Last Name</label>
              <input id="lastname" type="text" name="lastname" />
              <br></br>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" />
            </form>

            <div>
              <h3>Doctor</h3>
              <label>
                <select onChange={changeHandler}>
                  <option> Select your doctor</option>
                  <option>Dr.Hopkins</option>
                </select>
              </label>
            </div>
          </section>
        )}

        {selected && !success && !clicked && (
          <div>
            <h1>Where?</h1>

            <input type="radio" id="phone" name="phone"></input>
            <label htmlFor="phone">Phone</label>
            <br></br>

            <input type="radio" id="googlemeet" name="googlemeet"></input>
            <label htmlFor="googlemeet">Google meet</label>

            <h1>When?</h1>
            <div>
              <Calendar onChange={setDate} value={date} />
            </div>
            <div>Selected date: {date.toDateString()}</div>
          </div>
        )}
        <br></br>

        {!success && <button onClick={clickHandler}>Confirm Booking</button>}
        {clicked && !success && <h1>Scheduling</h1>}
        {clicked && success && (
          <div>
            <h1>Appointment confirmed</h1>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        )}

        {clicked && !success && <h1>Error Occured</h1>}
      </div>
    </Fragment>
  );
};

export default Appointment;
