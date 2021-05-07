import React from "react";
import CheckBox from "./CheckBox";
import { connect } from "react-redux";

// mettre propre et filtre pour obtenir ce qui nous intéresse (isDone ou pas Done)
function List({ items, contentById }) {
  return (
    <ul>
      {items.map((id) => {
        return (
          <React.Fragment>
            <CheckBox value={contentById[id].value} done={contentById[id].done} />
          </React.Fragment>
        );
      })}
    </ul>
  );
}

const mapStateToProps = function (state) {
  return {
    items: state?.items || [],
    contentById: state?.contentById || {}
  };
};

export default connect(mapStateToProps)(List);
