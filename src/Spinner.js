import React from "react";

const Spinner = (props) => {
    return (
        <div class="ui active inverted dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
