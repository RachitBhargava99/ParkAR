'use strict';

import React, {Component, useEffect} from 'react';

import {StyleSheet} from 'react-native';

import {
    Viro3DObject,
    ViroAmbientLight,
    ViroARScene,
    ViroBox,
    ViroConstants,
    ViroMaterials,
    ViroSpotLight,
    ViroText,
    ViroARPlaneSelector,
    ViroNode
} from 'react-viro';

import { AsyncStorage } from 'react-native';

import {getPath} from "./Helpers/PathGetter"

import ArrowGenerator from './Components/ArrowGenerator';
import axios from 'axios';


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// useEffect(()=>{
//
// })
export default class HelloWorldSceneAR extends Component {

    constructor() {
        super();

        // Set initial state here
        console.log("Here");
        console.log(this.state);
        console.log("Here");

        this.state = {
            text: "Initializing AR...",
            data: []
        };

        // bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);
    }

    render() {
        let dumPath = getPath(this.state);
        sleep(2000);
        console.log(this.state);

        return (
        <ViroARScene onTrackingUpdated={this._onInitialized}>
            {/*<ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]}*/}
            {/*          style={styles.helloWorldTextStyle}/>*/}
            <ViroAmbientLight color={"#ffffff"}/>
            <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
                           position={[0, 3, 1]} color="#ffffff" castsShadow={true}/>
            <ArrowGenerator
                directions={this.state.data} />
        </ViroARScene>
        );

        // console.log(dumPath);
        // let path = ['W', 'W', 'W', 'W', 'W', 'W'];
        // return (
        //
        // );
    }

    _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            this.setState({
                text: "Hello World!"
            });
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }
}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

module.exports = HelloWorldSceneAR;
