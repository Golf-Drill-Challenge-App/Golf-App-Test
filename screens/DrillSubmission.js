import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Appbar, Icon, Button } from "react-native-paper";
import DrillInput from "../components/DrillInput";

// Test Data for inputs
const InputData = {
  instruction: {
    description: "Target Distance",
    distance: "150",
    distanceMeasure: "yd",
  },
  inputs: [
    {
      icon: "arrow-up",
      prompt: "Carry Distance",
      distanceMeasure: "yd",
    },
    {
      icon: "arrow-left-right",
      prompt: "Side Landing",
      distanceMeasure: "ft",
    },
  ],
};

const DrillSubmission = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} color={"#F24E1E"} />
        <Appbar.Content title="20 Shot Challenge" titleStyle={styles.title} />
        <Appbar.Action
          icon="information-outline"
          onPress={() => {}}
          color={"#F24E1E"}
        />
      </Appbar.Header>

      <View>
        <Text style={styles.title}>
          Shot 1 <Text>/20</Text>
        </Text>
      </View>

      <View style={styles.container}>
        {/* Instruction */}
        <View style={styles.item}>
          <Text>{InputData.instruction.description}</Text>
          <Text>
            {InputData.instruction.distance}{" "}
            {InputData.instruction.distanceMeasure}
          </Text>
        </View>

        {/* Inputs */}
        {InputData.inputs.map((item, id) => (
          <DrillInput
            key={id}
            icon={item.icon}
            prompt={item.prompt}
            distanceMeasure={item.distanceMeasure}
          />
        ))}
      </View>

      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => console.log("Pressed Next Shot")}
        >
          Next Shot
        </Button>

        <Text onPress={() => console.log("Pressed View All Shots")}>
          View all shots
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    alignItems: "center",
  },
  button: {
    width: 200,
    backgroundColor: "#F24E1E",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    marginBottom: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DrillSubmission;
