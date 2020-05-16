import "./SeasonDisplay.css"; // Webpack sees we are importing them. Inserts them into index.html file.
import React from "react";

const seasonConfig = {
    summer: { text: "Lets head to the beach", iconName: "sun" },
    winter: { text: "Burrr, it is chilly.", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = (props) => {
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon icon-left massive `} />
            <h1>{text}</h1>
            <i className={`${iconName} icon icon-right massive`} />
        </div>
    );
};

export default SeasonDisplay;
