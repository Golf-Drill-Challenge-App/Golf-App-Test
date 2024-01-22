import { View } from "react-native";
import React from "react";
import {
  Text,
  Appbar,
  SegmentedButtons,
  List,
  Avatar,
  Icon,
} from "react-native-paper";

import DrillLeaderboard from "../components/DrillLeaderboard";
import DrillDescription from "../components/DrillDescription";

const DrillDetails = () => {
  const [value, setValue] = React.useState("leaderboard");

  const tabComponent = () => {
    if (value == "leaderboard") {
      return <DrillLeaderboard />;
    } else {
      return <DrillDescription />;
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} color={"#F24E1E"} />
      </Appbar.Header>

      {/* Title */}
      <View>
        <Text>20 Shot Challenge</Text>
      </View>

      {/* Tab system */}

      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "description",
            label: "Description",
          },
          {
            value: "leaderboard",
            label: "Leaderboard",
          },
        ]}
      />

      {tabComponent()}

      {/* Drop Down Menu */}
      {/* can't add this right now, need to test option */}
    </>
  );
};

export default DrillDetails;
