import React from "react";
import CheckBox from "./CheckBox";
import { TOGGLE_DONE } from "../app/action.js";
import { connect } from "react-redux";

function List({ items, contentById, dispatch }) {
  const list = ["ALL", "TODO", "DONE"];
  const [filterValue, setFilterValue] = React.useState("ALL");
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <React.Fragment>
      <div className="buttonRadio">
        {list.map((value) => {
          return (
            <div>
              <input
                type="radio"
                name="category"
                id={value}
                value={value}
                checked={filterValue === value}
                onClick={() => {
                  setFilterValue(value);
                }}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          );
        })}
        <input
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>

      <ul>
        {items.map((id) => {
          let displayContent = (filterValue === "TODO" && !contentById[id].done) || (filterValue === "DONE" && contentById[id].done) || filterValue === "ALL";
          if (displayContent && (contentById[id].value.includes(searchValue) || searchValue === "")) {
            return (
              <CheckBox
                key={id}
                content={contentById[id]}
                onClick={() => {
                  dispatch({
                    type: TOGGLE_DONE,
                    itemId: id,
                    done: contentById[id].done
                  });
                }}
              />
            );
          }
          return null;
        })}
      </ul>
    </React.Fragment>
  );
}

const mapStateToProps = function (state) {
  return {
    items: state?.items || [],
    contentById: state?.contentById || {}
  };
};

export default connect(mapStateToProps)(List);
