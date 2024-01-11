import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Text,
  PaperProvider,
} from "react-native-paper";
import MyComponent from "./components/MyComponent";

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: "#FFFCF7",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <Text>Hello World</Text>
        <MyComponent />
      </SafeAreaView>
    </PaperProvider>
  );
}
