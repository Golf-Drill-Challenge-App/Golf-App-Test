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

const DrillDetails = () => {
  const [value, setValue] = React.useState("leaderboard");

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

      {/* Drop Down Menu */}
      {/* can't add this right now, need to test option */}

      {/* List */}
      <List.Section>
        <List.Item
          title="Frank Nguyen"
          left={() => <Avatar.Text size={24} label="XD" />}
          right={() => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>8 ft</Text>
              <Icon source="chevron-right" />
            </View>
          )}
        />
        <List.Item
          title="Frank Nguyen"
          left={() => <Avatar.Text size={24} label="XD" />}
          right={() => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>8 ft</Text>
              <Icon source="chevron-right" />
            </View>
          )}
        />
      </List.Section>
    </>
  );
};

export default DrillDetails;
