import {StatusBar} from 'expo-status-bar';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BarChart, Grid, YAxis} from "react-native-svg-charts";
import {G, Rect} from "react-native-svg";
import {useState} from "react";
import {useWindowDimensions} from 'react-native';

export default function App() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [lastClicked, setLastClicked] = useState(0)
    const {height, width} = useWindowDimensions();
    const fill = 'rgb(134, 65, 244)'
    const data = [-2, 3, -5, 3, -3, -4, 5, 0, -2, -3, 0, -3, 1, -5, -2, 3, -4, 4, 2, 3, 2, -3, -1, 1, 4, -2, 4, -2, -4, -5, 1]

    const processedData = data.map((value, index) => ({
        value,
        svg: {
            fill: value > 0 ? 'green' : 'red',
            onPress: () => {
                setLastClicked(index)
            },
        },
    }))

    const handleScroll = function(event) {
        setScrollPosition(event.nativeEvent.contentOffset.x);
    }

    return (
        <View>
            <Text>Open up App.js to start working on your app!asef</Text>
            <View style={StyleSheet.create({border: 'red 1px solid'})}>
                <YAxis
                    data={data}
                    contentInset={{top: 30, bottom: 30}}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    style={StyleSheet.create({
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        height: 200,
                        zIndex: 1,
                        backgroundColor: 'white'
                    })}
                />
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{width: 2000}}
                    onScroll={handleScroll}
                    scrollEventThrottle={64}
                >
                    <BarChart
                        style={{
                            height: 200,
                            border: "blue solid 1px",
                            width: 2000,
                    }}
                        data={processedData}
                        svg={{fill}}
                        contentInset={{top: 30, bottom: 30, left: width / 2 - 10, right: width / 2 - 10}}
                        yAccessor={({ item }) => item.value}
                    >
                        <Grid/>
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
