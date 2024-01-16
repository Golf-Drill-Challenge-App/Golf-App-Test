import { View } from "react-native";
import React from "react";
import {
  Icon,
  Text,
  Box,
  Center,
  Icon,
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
} from "@gluestack-ui/themed";

const DrillDetails = () => {
  return (
    <Center>
      {/* TITLE */}
      <Box>
        <Text>DrillDetails</Text>
      </Box>

      {/* TAB SYSTEM */}

      {/* DROP DOWN */}
      <Select>
        <SelectTrigger>
          <SelectInput placeholder="Select option" />
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
            <SelectItem label="Red" value="red" />
            <SelectItem label="Blue" value="blue" />
            <SelectItem label="Black" value="black" />
            <SelectItem label="Pink" value="pink" isDisabled={true} />
            <SelectItem label="Green" value="green" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* LIST */}
    </Center>
  );
};

export default DrillDetails;
