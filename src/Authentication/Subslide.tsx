import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/Button'


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
        <Button label={last ? "Let's get started" : "Next"} variant={last ? "primary" : "default"} />
    </View>



    );
};

export default Subslide;


const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",       
        padding:28
    },
    subtitle: {
        fontSize: 18,
        fontWeight:"200",
        lineHeight:20,
        fontFamily: "sans-serif",
        marginBottom:12,
        padding:18

    },
    description:{
        flex:1,
        fontSize: 18,
        fontFamily: "sans-serif",
        lineHeight:24,
        color: "#0c0d34",
        textAlign:"center",
        marginBottom:10,

    },

}) ;