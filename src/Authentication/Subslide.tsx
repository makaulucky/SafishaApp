import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

interface SubslideProps{
    subtitle: string;
    description: string;
    last: boolean;
}

const Subslide =({subtitle, description, last}: SubslideProps)=> {
    return (
    <View style={styles.container} >
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>



    );
};

export default Subslide;


const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        padding:24
    },
    subtitle: {
        fontSize: 24,
        fontFamily: "sans-serif-medium",

    },
    description:{
        fontSize: 16,
        fontFamily: "sans-serif",
        lineHeight:24,
        color: "#0c0d34",

    },

}) ;