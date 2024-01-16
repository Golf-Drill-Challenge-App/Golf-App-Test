import { View } from "react-native";
import React, { useState } from "react";
import {
  Text,
  Appbar,
  SegmentedButtons,
  List,
  Avatar,
  Icon,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

const DrillDetails = () => {
  const [value, setValue] = useState("leaderboard");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filter, setFilter] = useState("");

  const filterList = [
    {
      label: "Total SG",
      value: "totalSG",
    },
    {
      label: "Avg SG",
      value: "avgSG",
    },
    {
      label: "Hole Diff",
      value: "holeDiff",
    },
    {
      label: "idk",
      value: "idk",
    },
  ];

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
      <DropDown
        label={"Filter"}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={filter}
        setValue={setFilter}
        list={filterList}
      />

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
