import React from "react";
import Arrow from "./Arrow";

export default function ArrayGenerator (props) {
    let arrows = [];
    let currX = 0;
    let currY = 1;
    props.directions.forEach(currDirection => {
        if (currDirection === "N") {
            currY += 1;
        } else if (currDirection === "S") {
            currY -= 1;
        } else if (currDirection === "E") {
            currX += 1;
        } else if (currDirection === "W") {
            currX -= 1;
        }
        console.log(arrows);
        arrows.push((
            <Arrow
                x={currX}
                y={currY}
                height={0.1}
                calibrationRatio={0.02}
                odometry={currDirection} />
        ));
    });
    return arrows;
}
