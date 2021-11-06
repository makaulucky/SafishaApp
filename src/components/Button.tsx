import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import {RectButton} from "react-native-gesture-handler"

interface ButtonProps {
    variant: "default" | "primary";
    label: string;

}
const Button=({variant, label}: ButtonProps) => {
    const backgroundColor= variant==="primary"? "#007ffe" : "rgb (12, 13, 52, 0.05)";
    const color= variant==="primary" ? "white" : "#0c0d34";
    return (

        <RectButton style={[styles.container, {backgroundColor}]}>           
            <Text style={[styles.label, {color}]}>{label}</Text>
        </RectButton>
    )
        
};
Button.defaultProps = {variant: "default"};


export default Button;

//Button styles

const styles = StyleSheet.create({
    container: {
        borderRadius:25,
        height:45,
        width:245,
        backgroundColor:"black"
    },
    label: {
        fontSize:14,
        fontFamily: "sans-serif",
        textAlign: "center",
        justifyContent: "center",

    },
})