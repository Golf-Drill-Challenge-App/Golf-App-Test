import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Icon } from "react-native-paper";
import TextBox from "./TextBox";

export default function DrillInput({
  icon,
  prompt,
  distanceMeasure,
  inputValue,
  onInputChange,
}) {
  return (
    <View style={styles.item}>
      <Text>
        <Icon source={icon} />
        {prompt}
      </Text>

      <View style={styles.horizontalContainer}>
        <TextBox value={inputValue} onChangeText={onInputChange} />
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
