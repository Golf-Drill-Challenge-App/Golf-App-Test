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
import {ApplicationProvider, IndexPath, Select, SelectItem} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const DrillDetails = () => {
  const [value, setValue] = useState("leaderboard");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filter, setFilter] = useState("");

  const [filterVal, setFilterVal] = useState(
      {
          label: "Total SG",
          value: "totalSG",
      })

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

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
    <ApplicationProvider {...eva} theme={eva.light}>
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
        <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
    >
        <SelectItem title='Option 1' />
        <SelectItem title='Option 2' />
        <SelectItem title='Option 3' />
    </Select>

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
    </ApplicationProvider>
  );
};

export default DrillDetails;
