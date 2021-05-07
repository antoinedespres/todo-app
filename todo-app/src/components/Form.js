import React from "react";
import { ADD_ITEMS } from "../app/action.js";
import { connect } from "react-redux";

function Form({ dispatch }) {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={function () {
          dispatch({
            type: ADD_ITEMS,
            value,
          });
          setValue("");
        }}
      >
        Add
      </button>
    </React.Fragment>
  );
}

export default connect()(Form);
