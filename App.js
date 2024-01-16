import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import DrillSubmission from "./screens/DrillSubmission";
import DrillDetails from "./screens/DrillDetails";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView>
        {/* <DrillSubmission /> */}
        <DrillDetails />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
