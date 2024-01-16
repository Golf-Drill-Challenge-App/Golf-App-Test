import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import DrillSubmission from "./screens/DrillSubmission";

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
      <DrillSubmission />
    </PaperProvider>
  );
}
