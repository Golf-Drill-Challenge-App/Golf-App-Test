import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {BarChart, Grid, YAxis} from "react-native-svg-charts";
import {Path} from "react-native-svg";
import {useState} from "react";
import {useWindowDimensions} from 'react-native';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';

export default function App() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [lastClicked, setLastClicked] = useState(0)
    const [movingAvgRange, setMovingAvgRange] = useState(5)
    const {width} = useWindowDimensions();
    const fill = 'rgb(134, 65, 244)'
    const data = [-2, 3, -5, 3, -3, -4, 5, 0, -2, -3, 0, -3, 1, -5, -2, 3, -4, 4, 2, 3, 2, -3, -1, 1, 4, -2, 4, -2, -4, -5, 1]

    const chartWidth = 2000
    const chartHeight = 200
    const halfScreenCompensation = width / 2 - 10

    const processedData = data.map((value, index) => ({
        value: value,
        movingAvg: index > movingAvgRange ? data.slice(index - movingAvgRange, index).reduce((a, b) => a + b, 0) / movingAvgRange : null,
        svg: {
            fill: value > 0 ? 'green' : 'red',
            onPress: () => {
                setLastClicked(index)
            },
        },
    }))

    const movingAvgData = data.map((value, index) => (index > movingAvgRange ? data.slice(index - movingAvgRange, index).reduce((a, b) => a + b, 0) / movingAvgRange : 0))

    // Calculate scales
    const scaleY = scale.scaleLinear()
        .domain([Math.min(...data), Math.max(...data)]) // Adjust scale based on your data
        .range([0, chartHeight]);

    const line = shape.line()
        .x((_, index) => halfScreenCompensation + index * ((chartWidth - 2*halfScreenCompensation) / movingAvgData.length))
        .y(d => scaleY(d))(movingAvgData)

    console.log(chartWidth - 2*halfScreenCompensation)

    console.log(movingAvgData)
    console.log(movingAvgData.map((value) => (scaleY(value) - chartHeight/2) * 4 + chartHeight/2))

    const handleScroll = function(event) {
        setScrollPosition(event.nativeEvent.contentOffset.x);
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
        <View>
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
                <ScrollView
                    horizontal={true}
                    // contentContainerStyle={{width: 2000}}
                    onScroll={handleScroll}
                    scrollEventThrottle={64}
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
                    >
                        <Grid/>
                        <MovingAvgPath line={line}/>
                    </BarChart>
                </ScrollView>
            </View>

            <Text>Scroll Position: {scrollPosition}</Text>
            <Text>Last Clicked: {lastClicked}</Text>
            <StatusBar style="auto"/>
        </View>
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
