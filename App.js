import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TamaguiProvider} from 'tamagui'

import config from './tamagui.config'
import {SelectDemoItem} from "./Select";
import {useState} from "react";

export default function App() {
    const [val, setVal] = useState('apple')
    return (
        <TamaguiProvider config={config}>
            <View style={styles.container}>
                <Button>Hello world</Button>
                <SelectDemoItem items={[
                    {name: 'Apple'},
                    {name: 'Pear'},
                    {name: 'Blackberry'},
                    {name: 'Peach'},
                    {name: 'Apricot'},
                    {name: 'Melon'},
                    {name: 'Honeydew'},
                    {name: 'Starfruit'},
                    {name: 'Blueberry'},
                    {name: 'Raspberry'},
                    {name: 'Strawberry'},
                    {name: 'Mango'},
                    {name: 'Pineapple'},
                    {name: 'Lime'},
                    {name: 'Lemon'},
                    {name: 'Coconut'},
                    {name: 'Guava'},
                    {name: 'Papaya'},
                    {name: 'Orange'},
                    {name: 'Grape'},
                    {name: 'Jackfruit'},
                    {name: 'Durian'}
                ]} label={"Fruits"} val={val} setVal={setVal} native={true}/>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto"/>
                <Text>Selected: {val}</Text>
            </View>
        </TamaguiProvider>
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
