import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import NativeSafeAreaView from "react-native-safe-area-context/src/specs/NativeSafeAreaView";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {
    const sortedDrills = drills.sort((a, b) => a.type.localeCompare(b.type));
    let previousType = null;

    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Drills" component={Drills} />
            <Stack.Screen name="Drill" component={Drill} />
          </Stack.Navigator>
      </NavigationContainer>
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
