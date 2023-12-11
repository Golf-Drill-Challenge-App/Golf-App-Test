import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BarChart, Grid, YAxis} from "react-native-svg-charts";
import {Path} from "react-native-svg";
import {useRef, useState} from "react";
import {useWindowDimensions} from 'react-native';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import {clampNumber} from "./Utility";

export default function App() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [movingAvgRange, setMovingAvgRange] = useState(5)
    const {width} = useWindowDimensions()
    const fill = 'rgb(134, 65, 244)'
    const data = [4,10,7,-4,4,-10,7,8,-6,-5,-6,-6,-3,-6,-9,1,8,8,-4,9,2,5,-8,-7,4,-1,2,-1,-9,-6,7,5,0,10,-4,2,9,2,-4,-2,4,-2,4,-2,-4,-2,8,5,2,4,-5,-3,2,4,10,-7,-5,-6,-6,-5,6,2,8,-9,-2,9,-9,7,-7,9,0,10,8,1,9,-8,1,-10,-10,-7,-10,-2,-3,-5,7,3,10,-5,6,-6,-5,10,-9,10,-7,-3,-9,-9,-2,7,4,-6,10,-8,8,6,-6,0,-1,7,7,-1,-10,0,5,1,1,-1,-8,-9,5,1,4,8,-6,-7,4,5,9,-6,10,-1,10,8,-7,3,8,7,-8,8,-3,3,9,10,-8,-7,2,-4,-10,-8,-6,9,7,-7,-9,-4,5,-4,-3,-6,-2,4,3,8,-6,4,-9,4,-5,-2,8,-10,-4,-6,1,-5,9,-10,-10,-3,-7,2,3,6,7,3,8,-5,5,-8,1,-6,9,5,8,-1,4,8,6,3,-1,1,5,-9,-5,-5,2,-8,-2,7,10,6,7,7,2,-1,-7,-10,-7,5,8,4,-5,-7,-6,-7,-9,9,6,-4,-10,1,-2,10,9,-7,-4,0,-9,-9,0,4,6,-9,-5,5,7,10,6,-1,4,6,-10,9,4,-5,-4,5,-10,-7,-7,4,4,2,10,-4,-9,8,6,8,-1,1,-5,4,-7,-9,9,-6,-2,-9,9,4,-5,5,3,6,-5,2,3,-2,-9,-1,1,-9,-4,-3,-6,-9,-7,-6,-1,-6,10,10,-7,5,8,1,5,-8,7,-10,5,7,3,-1,9,10,6,6,-3,6,6,-6,-5,-4,-9,-2,6,-6,6,-10,-6,3,1,-4,1,-2,-4,8,6,3,3,8,2,-7,-4,5,8,-5,-5,-1,-9,-2,-1,5,-3,7,-3,3,10,3,5,7,3,9,-10,6,10,4,-2,-5,-9,9,-7,-9,5,-10,-9,4,-5,0,5,-3,8,6,9,0,5,-8,-3,3,-10,-7,-2,-3,-9,-6,-2,7,5,-9,-5,-7,-4,-1,9,5,-4,-6,5,6,9,-9,0,-2,0,-10,-9,7,8,6,9,2,-5,0,0,-4,6,-10,0,-4,-1,6,5,2,-1,3,-5,8,7,-7,10,2,-10,-4,3,-9,-5,9,9,-8,-5,6,-4,3,-1,-8,4,-10,9,-7,9,4,10,8,-10,1,-1,5,-8,10,-4,-10,-1,-5,4,-5,10,-1,5,-8,3,-9,-10,5,-7,1,7,-9,1,-5,-1,-10,-2,-9,1,-7,-10,-6,-10,10,6,1,-4,-4,0,10,-8,-1,-5,-10,5,-9,-10,-10,5,9,-9,8,9,-4,-3,-8,6,-6,-6,-10,1,4,-9,-7,0,0,3,5,-3,1,5,-10,-1,4,7,-1,0,10,4,10,-4,3,-8,-9,-2,-4,4,-6,1,2,-4,-7,-4,5,3,7,8,1,-5,4,5,-3,-4,-7,4,0,-7,-3,7,-7,-2,0,-3,-2,-9,3,10,2,1,7,5,3,-4,-3,-10,4,-7,-7,3,-6,3,-4,-10,-8,-1,-1,7,9,9,4,2,-3,-7,3,10,7,7,6,10,-8,7,-7,7,1,-7,-2,1,4,-6,2,0,8,-6,-9,5,-5,-3,-10,-3,-3,10,-5,-2,-2,-10,-7,5,-1,6,-2,4,1,1,7,-9,9,5,7,-5,-8,-5,-7,-9,-4,6,-10,4,5,0,10,-1,10,7,-7,-5,5,0,5,-2,-1,7,10,4,9,7,9,-1,-8,-2,-7,-5,-10,-8,-1,-2,6,10,7,4,-5,6,-2,10,-5,-5,2,9,-5,-9,-10,3,-4,-8,9,-9,-3,-4,-9,-1,7,-5,10,5,3,10,-6,-3,-6,-6,6,3,3,7,3,-1,7,10,3,0,9,-7,0,6,4,-8,5,-9,-3,-5,3,3,10,-3,-9,9,0,-1,2,-10,6,-6,-7,-3,-4,10,-9,-5,9,6,7,4,-2,-5,6,-7,-2,-10,5,-3,-10,-8,-7,5,-2,-8,-7,-3,-1,3,-5,-4,3,-8,-1,-8,-9,-7,-3,-7,1,9,2,6,-9,5,-1,-7,5,-4,9,-4,9,-6,-5,-8,9,-5,9,-6,1,6,6,-8,6,8,-3,-5,1,-3,-4,-7,8,-1,-8,-5,-8,-1,-4,1,7,5,-1,10,-10,2,7,-8,2,-5,-6,-4,5,7,-10,1,-4,-7,8,1,4,2,-9,3,6,6,5,-9,-5,-10,9,2,-8,8,4,-6,3,-8,-7,1,-9,5,8,8,6,-5,-6,-8,-4,1,-3,-2,-5,-7,-3,5,-5,2,-7,-6,-3,7,6,-7,-5,2,-9,5,-2,7,9,3,-5,-4,-1,9,-6,-3,-9,5,1,4,6,8,-1,3,-3,-2,0,-3,7,-9,-5,-8,1,4,1,-5,-1,-3,1,4,-8,-2,1,4,-5,-1,1,-3,0,-6,-8,6,-3,-3,-10,8,-2,4,6,-5,0,-2,2,-9,-4,-3,-2,1,9,-10,-6,-1,-7,4,-4,7,6,9,6,4,5,-1,-8,-1,10,-5,-10,5,-4,7,5,-3,-5,-4,-10,-9,-7,9,10,-5,3]
    const [selected, setSelected] = useState(data.length - 1)
    const scrollViewRef = useRef();

    const barWidth = 50

    const halfScreenCompensation = width / 2 - barWidth / 2
    const chartWidth = halfScreenCompensation * 2 + data.length * barWidth
    const chartHeight = 200

    const selectedBar = (scrollPosition) => {
        return clampNumber(Math.floor((scrollPosition + barWidth / 2) / barWidth), 0, data.length - 1)
    }

    const processedData = data.map((value, index) => ({
        value: value,
        movingAvg: index > movingAvgRange ? data.slice(index - movingAvgRange, index).reduce((a, b) => a + b, 0) / movingAvgRange : null,
        svg: {
            fill: value > 0 ? 'green' : 'red',
            onPress: () => {
                setSelected(index)
                scrollViewRef.current.scrollTo({x: index * barWidth, animated: true})
            },
        },
    }))

    const movingAvgData = data.map(
        (value, index) => (
            index > movingAvgRange ? data.slice(index - movingAvgRange, index).reduce((a, b) => a + b, 0) / movingAvgRange : 0))

    // Calculate scales
    const scaleY = scale.scaleLinear()
        .domain([Math.min(...data), Math.max(...data)]) // Adjust scale based on your data
        .range([0, chartHeight]);

    const line = shape.line()
        .x((_, index) => halfScreenCompensation + barWidth/2 + index * ((chartWidth - 2*halfScreenCompensation) / movingAvgData.length))
        .y(d => scaleY(d))(movingAvgData)

    const handleScroll = function(event) {
        setScrollPosition(event.nativeEvent.contentOffset.x);
        setSelected(selectedBar(event.nativeEvent.contentOffset.x))
    }

    const MovingAvgPath = ({ line }) => (
        <Path
            d={line}
            stroke={'rgba(134, 65, 244, 1)'}
            fill={'none'}
            strokeWidth={2}
        />
    );

    return (
        <SafeAreaView>
            <Text>Open up App.js to start working on your app!asef</Text>
            <View>
                <YAxis
                    data={data}
                    contentInset={{top: 30, bottom: 30}}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    // numberOfTicks={10}
                    style={StyleSheet.create({
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        height: chartHeight,
                        zIndex: 1,
                        backgroundColor: 'white'
                    })}
                />
                <View
                style={{
                    position: 'absolute',
                    left: (width / 2) - 1, // Adjust this to place the line in the middle
                    top: 0,
                    bottom: 0,
                    width: 1,
                    zIndex: 2,
                    backgroundColor: 'black', // Choose a color that stands out
                }}
            />
                <ScrollView
                    horizontal={true}
                    // contentContainerStyle={{width: 2000}}
                    onScroll={handleScroll}
                    scrollEventThrottle={64}
                    ref={scrollViewRef}
                >
                    <BarChart
                        style={{
                            height: chartHeight,
                            width: chartWidth,
                            position: 'relative',
                            top: 0,
                            left: 0,
                        }}
                        data={processedData}
                        svg={{fill}}
                        contentInset={{top: 30, bottom: 30, left: halfScreenCompensation, right: halfScreenCompensation}}
                        yAccessor={({ item }) => item.value}
                        pointerEvents={'box-only'}
                    >
                        <Grid
                            pointerEvents={'none'}/>
                        <MovingAvgPath
                            line={line}
                            pointerEvents={'none'}
                        />
                    </BarChart>
                </ScrollView>
            </View>

            <Text>Scroll Position: {scrollPosition}</Text>
            <Text>Last Clicked: {selected}</Text>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
