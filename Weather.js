import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";

export default function Weather({ condition, temp }){
return (
    <View style={ styles.container }>
        <Text>{ temp }</Text>
        <Text>{ condition }</Text>
    </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})