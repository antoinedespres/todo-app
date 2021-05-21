import React from "react";

function CheckBox(props) {
    return (
        <React.Fragment>
            <div onClick={props.onClick}>
                {props.content.done ? "✓ " : "X "}{props.content.value}
            </div>
        </React.Fragment>
    );
}

export default CheckBox;

