import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, Appbar, Icon, Button } from "react-native-paper";
import DrillInput from "../components/DrillInput";
import DrillInputDescription from "../components/DrillInputDescription";

// Test Data for inputs
const InputData = {
  attempts: [
    {
      shotNum: 1,
      target: [
        {
          description: "Target Distance",
          distanceMeasure: "yd",
          value: 150, //this will need to be randomly generated
        },
      ],
      inputs: [
        {
          id: "distance",
          icon: "arrow-up",
          prompt: "Carry Distance",
          distanceMeasure: "yd",
          value: null, //user generated
        },
        {
          id: "sideLanding",
          icon: "arrow-left-right",
          prompt: "Side Landing",
          distanceMeasure: "ft",
          value: null, //user generated
        },
      ],
    },
    {
      shotNum: 2,
      target: [
        {
          description: "Target Distance",
          distanceMeasure: "yd",
          value: 69, //this will need to be randomly generated
        },
      ],
      inputs: [
        {
          id: "distance",
          icon: "arrow-up",
          prompt: "Carry Distance",
          distanceMeasure: "yd",
          value: null, //user generated
        },
        {
          id: "sideLanding",
          icon: "arrow-left-right",
          prompt: "Side Landing",
          distanceMeasure: "ft",
          value: null, //user generated
        },
      ],
    },
    {
      shotNum: 3,
      target: [
        {
          description: "Target Distance",
          distanceMeasure: "yd",
          value: 144, //this will need to be randomly generated
        },
      ],
      inputs: [
        {
          id: "distance",
          icon: "arrow-up",
          prompt: "Carry Distance",
          distanceMeasure: "yd",
          value: null, //user generated
        },
        {
          id: "sideLanding",
          icon: "arrow-left-right",
          prompt: "Side Landing",
          distanceMeasure: "ft",
          value: null, //user generated
        },
      ],
    },
    {
      shotNum: 4,
      target: [
        {
          description: "Target Distance",
          distanceMeasure: "yd",
          value: 134, //this will need to be randomly generated
        },
      ],
      inputs: [
        {
          id: "distance",
          icon: "arrow-up",
          prompt: "Carry Distance",
          distanceMeasure: "yd",
          value: null, //user generated
        },
        {
          id: "sideLanding",
          icon: "arrow-left-right",
          prompt: "Side Landing",
          distanceMeasure: "ft",
          value: null, //user generated
        },
      ],
    },
  ],
};

const DrillSubmission = () => {
  const [inputValues, setInputValues] = useState(
    Array.from({ length: InputData.attempts.length }, () => ({}))
  );
  const [attemptIndex, setAttemptIndex] = useState(0);

  const handleInputChange = (id, newText) => {
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[attemptIndex] = {
        ...updatedValues[attemptIndex],
        [id]: newText,
      };
      return updatedValues;
    });
  };

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
          Shot {InputData.attempts[attemptIndex].shotNum}{" "}
          <Text>/{InputData.attempts.length}</Text>
        </Text>
      </View>

      <View style={styles.container}>
        {/* Instruction */}
        {InputData.attempts[attemptIndex].target.map((item, id) => (
          <DrillInputDescription
            key={id}
            description={item.description}
            distanceMeasure={item.distanceMeasure}
            value={item.value}
          />
        ))}

        {/* Inputs */}
        {InputData.attempts[attemptIndex].inputs.map((item, id) => (
          <DrillInput
            key={id}
            icon={item.icon}
            prompt={item.prompt}
            distanceMeasure={item.distanceMeasure}
            inputValue={inputValues[attemptIndex]?.[item.id] || ""}
            onInputChange={(newText) => {
              handleInputChange(item.id, newText);
            }}
          />
        ))}
      </View>

      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => {
            console.log("Pressed Next Shot");
            for (let i = 0; i < InputData.attempts.length; i++) {
              console.log("InputValue[", i, "]: ", inputValues[i]);
            }
            console.log(inputValues);
          }}
        >
          Next Shot
        </Button>

        <Text onPress={() => console.log("Pressed View All Shots")}>
          View all shots
        </Text>
      </View>

      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => {
            setAttemptIndex(attemptIndex + 1);
          }}
        >
          Increase Shot index
        </Button>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => {
            setAttemptIndex(attemptIndex - 1);
          }}
        >
          Decrease Shot index
        </Button>
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
