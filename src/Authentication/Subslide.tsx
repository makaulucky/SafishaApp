import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

interface SubslideProps{
    subtitle: string;
    description: string;
    last: boolean;
    x: Animated.Node<number>;
}

const Subslide =({subtitle, description, last, x }: SubslideProps)=> {
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
    },
    subtitle: {
        fontSize: 30,
        fontFamily: "sans-serif-medium",

    },
    description:{
        fontSize: 18,
        fontFamily: "sans-serif",

    },

}) ;