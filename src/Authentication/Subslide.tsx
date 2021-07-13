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
        padding:40
    },
    subtitle: {
        fontSize: 38,
        fontWeight:"bold",
        lineHeight:28,
        fontFamily: "sans-serif",
        marginBottom:12,
        padding:18

    },
    description:{
        flex:1,
        fontSize: 28,
        fontFamily: "sans-serif",
        lineHeight:38,
        color: "#0c0d34",
        textAlign:"center"

    },

}) ;