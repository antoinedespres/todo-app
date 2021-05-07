import React from "react";

function Header(props) {
  return <h1 onClick={props.fn}>{props.title}</h1>;
}

export default Header;
