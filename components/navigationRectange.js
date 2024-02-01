import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NavigationRectange() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text>Shot 1/20</Text>
        <Text>Target: 100yd</Text>
      </View>
      <View style={styles.rowContainer}>
        <View>
          {/* ICON */}
          <Text>-13.8 ft</Text>
        </View>
        <View>
          {/* ICON */}
          <Text>10 yd</Text>
        </View>
        <View>
          <Text>SG 3</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    padding: 20,
    borderRadius: 10,
    maxHeight: 250,
    width: "80%",
    overflow: "hidden",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10, // Adjust the margin as needed
  },
});
