import { Fragment } from "react";
import classes from "./Movies.module.css";

const Movies = (props) => {
  return (
    <Fragment>
      <div>
        <section>
          <h3 className={classes.title}>{props.title}</h3>
          <h3 className={classes.opening}>{props.releaseDate}</h3>
          <p className={classes.release}>{props.openingText}</p>
        </section>
      </div>
    </Fragment>
  );
};

export default Movies;
