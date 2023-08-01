import React from "react";

function Data(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.logo}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.paragraph}</dd>
    </div>
  );
}
export default Data;
