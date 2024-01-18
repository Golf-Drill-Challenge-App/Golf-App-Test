import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Icon } from "react-native-paper";
import TextBox from "./TextBox";

const InputData = {
  icon: "arrow-up",
  prompt: "Carry Distance",
  distanceMeasure: "yd",
};

export default function DrillInput({ icon, prompt, distanceMeasure }) {
  return (
    <View style={styles.item}>
      <Text>
        <Icon source={icon} />
        {prompt}
      </Text>

      <View style={styles.horizontalContainer}>
        <TextBox />
        <Text>{distanceMeasure}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
