import { View } from "react-native";
import React, { useState } from "react";
import {
  Icon,
  Text,
  Box,
  Center,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
} from "@gluestack-ui/themed";

const DrillDetails = () => {
  const [selected, setSelected] = useState("totalsg");
  const [label, setLabel] = useState("Total SG");

  const handleOptionChange = (value, label) => {
    setSelected(value);
    setLabel(label);
  };

  return (
    <>
      {/* TITLE */}
      <Box>
        <Text>DrillDetails</Text>
      </Box>

      {/* TAB SYSTEM */}

      {/* DROP DOWN */}
      <Box>
        <Select>
          <SelectTrigger>
            <SelectInput placeholder="Select option" value={label} />
            <SelectIcon mr="$3">
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem
                label="Total SG"
                value="totalsg"
                onSelect={() => handleOptionChange("totalsg", "Total SG")}
              />
              <SelectItem
                label="Avg SG"
                value="avgsg"
                onSelect={() => handleOptionChange("avgsg", "Avg SG")}
              />
              <SelectItem
                label="Hole Diff"
                value="holediff"
                onSelect={() => handleOptionChange("holediff", "Hole Diff")}
              />
            </SelectContent>
          </SelectPortal>
        </Select>
      </Box>

      {/* LIST */}
    </>
  );
};

export default DrillDetails;
