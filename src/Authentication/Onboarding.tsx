import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Animated,
{ useValue, multiply } from 'react-native-reanimated';
import Slide,{SLIDE_HEIGHT} from './Slide';
import Subslide from './Subslide';

const {width} = Dimensions.get("screen");
const BORDER_RADIUS =75;

const slides =[
    {title: "Welcome",subtitle: "Get Clean", description: "Are you bothered about dirty laundry? Don't worry! Find the best cleaning services here!" },

    {title: "Is Always",subtitle: "In need of house maids?", description: "Relax... Uko sorted! They are Ready for you!" },

    {title: "Ready" ,subtitle: "Make your Granny Happy", description: "Our caring team is here for you and your family." },

    {title: "To Clean" ,subtitle: "Look Good, Feel Good", description: "Our goal is to make your life and of those you love, Worth-living!"},
];

const Onboarding = () => {
    const x= React.useRef(new Animated.Value(0)).current;
    //useValue(0)

    return (
        <View style={styles.container}>
            <Animated.View style={styles.slide}>
                <Animated.ScrollView horizontal 
                snapToInterval={width} 
                decelerationRate="fast" 
                showsHorizontalScrollIndicator={false}
                 bounces={false}
                 scrollEventThrottle={1} 
                 onScroll={Animated.event([{nativeEvent: {contentOffset: {x: x}}}],
                    {useNativeDriver: false})}              
                  
                 >
                     { slides.map(({title}, index)=>(
                         <Slide key={index} right={!!(index % 2 )} {...{title}}/>
                     ))}

                </Animated.ScrollView>
            </Animated.View>

            <View style={styles.footer}>
            <Animated.View                 
                 style={{...StyleSheet.absoluteFillObject,backgroundColor:"#007ffe"}}/>

               <Animated.View style={[styles.footerContent, { width: width * slides.length, flex:1, transform:[{translateX: multiply(x, -1)}],}]}>

                {slides.map(({subtitle, description },index)=>(
                    <Subslide
                          key={index} last={index===(slides.length -1)} {...{subtitle,description, x }}/>
                     ))}

                </Animated.View>
            </View>
        </View>
    );
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
        borderBottomRightRadius: BORDER_RADIUS,

    },
    footer: {
        flex:1,
    },
    footerContent: {
        flex:1,
        flexDirection:"row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS,

    },
    
});