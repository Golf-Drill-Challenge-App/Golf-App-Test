import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "IBMPlexMono-Regular": require("./assets/fonts/IBMPlexMono-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "IBMPlexMono-Regular", fontSize: 30 }}>
        IBMPlexMono Regular
      </Text>
      <Text style={{ fontFamily: "Inter-Bold", fontSize: 30 }}>Inter-Bold</Text>
      <Text style={{ fontFamily: "Inter-Regular", fontSize: 30 }}>
        Inter-Regular
      </Text>
      <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 30 }}>
        Inter-SemiBold
      </Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
