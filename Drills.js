import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import drills from "./drills.json";

export default function Drills() {
    const sortedDrills = drills.sort((a, b) => a.type.localeCompare(b.type));
    let previousType = null;
  return (
      <SafeAreaView style={styles.container}>
          <Text>
              Drills
          </Text>
          <ScrollView>
              {sortedDrills.map((drill) => {
                  let returnVal =  <View key={drill.id}>
                      {drill.type !== previousType ? <Text style={StyleSheet.create({
                          fontWeight: 'bold',
                      })}>{drill.type}</Text> : null}
                      <View style={StyleSheet.create({
                          borderStyle: 'solid',
                          borderColor: 'black',
                          borderWidth: 1,
                      })}>
                          <Text>{drill.name}</Text>
                          <Text>{drill.description}</Text>
                          <Text>{drill.specification}</Text>
                          <Text>{drill.inputs.drive ? "True" : "False"}</Text>
                          <Text>{drill.inputs.side ? "True" : "False"}</Text>
                          <Text>{drill.inputs.strokes ? "True" : "False"}</Text>
                          <Text>{drill.inputs.reps}</Text>
                      </View>
                  </View>
                  previousType = drill.type;
                  return returnVal;
              })}
          </ScrollView>
      </SafeAreaView>
  );
}