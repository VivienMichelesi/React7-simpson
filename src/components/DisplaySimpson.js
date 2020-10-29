import React from "react";

function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <img src={simpson.image} alt={simpson.character} />
      <ul>
        <li>{simpson.character}</li>
        <li>
          <strong>{simpson.quote}</strong>
        </li>
      </ul>
    </div>
  );
}

export default DisplaySimpson;
