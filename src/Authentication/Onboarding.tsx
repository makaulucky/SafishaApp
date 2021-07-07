import React from 'react';
import { StyleSheet, Dimensions,Text, View } from 'react-native';
import Animated, 
{ useValue } from 'react-native-reanimated';
import Slide,{SLIDE_HEIGHT} from './Slide';




const {width} = Dimensions.get("screen");

const Onboarding = () => {
    const x= useValue(0);

    return (
        <View style={styles.container}>
            <View style={styles.slide}>
                <Animated.ScrollView horizontal 
                snapToInterval={width} 
                decelerationRate="fast" 
                showsHorizontalScrollIndicator={false}
                 bounces={false}
                 scrollEventThrottle={1}
                 
                 
                                  
                 >
                    <Slide label="Our Team" />
                    <Slide label="Is Always" right/>
                    <Slide label="Ready"/>
                    <Slide label="To Clean" right/>
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}/>
            <View>
                
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "cyan"}} />
                <View style={{flex:1, backgroundColor:"white", borderTopRightRadius:75,}}>
                </View >
            </View>
        </View>
    )
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
    },
    slide: {
        height: SLIDE_HEIGHT,
        backgroundColor:"#007ffe",
        borderBottomRightRadius:75,

    },
    footer: {
        flex:1,
    },
    
});