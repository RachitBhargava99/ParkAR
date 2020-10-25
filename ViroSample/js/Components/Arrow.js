import {Viro3DObject} from "react-viro";
import React from "react";

export default function Array (props){
    let size = 0.5 * props.calibrationRatio;
    let direction = 0;
    if (props.odometry === "N") {
        direction = 0;
    } else if (props.odometry === "W") {
        direction = 90;
    } else if (props.odometry === "E") {
        direction = -90;
    } else if (props.odometry === "S") {
        direction = 180;
    }
    return(
        <Viro3DObject
            source={require('../res/arrow.obj')}
            resources={[require('../res/arrow.mtl')]}
            position={[props.x*props.calibrationRatio, -props.height, -(props.y)*props.calibrationRatio]}
            scale={[size, size, size]}
            rotation={[90, direction, 0]}
            type="OBJ" />
    );
}
