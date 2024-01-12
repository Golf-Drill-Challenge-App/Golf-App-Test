import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Text,
  PaperProvider,
  Appbar,
} from "react-native-paper";

import TextBox from "./components/TextBox";

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
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="20 Shot Challenge" style={styles.title} />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="information-outline" onPress={() => {}} />
      </Appbar.Header>

      <View>
        <Text style={styles.title}>
          Shot 1 <Text>/20</Text>
        </Text>
      </View>

      <View style={styles.container}>
        <TextBox />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
