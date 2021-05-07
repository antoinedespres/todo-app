import React from "react";

function CheckBox(props) {
    const [done, setDone] = React.useState(false);
    return (
        <React.Fragment>
            <div
             className="no-select" 
             onClick={() => { setDone(!done) }}
            >
                {props.done ? "✓" : "X"}{props.value}
            </div>
        </React.Fragment>
    );
}

export default CheckBox;

