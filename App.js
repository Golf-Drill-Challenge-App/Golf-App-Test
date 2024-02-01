import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import NavigationRectange from "./components/navigationRectange";

export default function App() {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <BottomSheetScrollView>
              <View style={styles.contentContainer}>
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
                <NavigationRectange />
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
});
