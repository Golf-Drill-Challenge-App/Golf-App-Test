import { StyleSheet, View } from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  Icon,
  Text,
  Box,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

export default function DrillSubmission() {
  return (
    <Box justifyContent="center" alignItems="center">
      {/* Title Box */}
      <Box justifyContent="center" alignItems="center">
        <Text>Target Distance</Text>
        <Text>150 YD</Text>
      </Box>

      {/* Input Box */}

      <Box Box justifyContent="center" alignItems="center" mb="$20">
        <FormControl
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
        >
          {/* Input Group 1 */}
          <FormControlLabel mb="$1">
            <FormControlLabelText>Carry Distance</FormControlLabelText>
          </FormControlLabel>
          <Input justifyContent="center" alignItems="center">
            <InputField
              type="number"
              inputMode="numeric"
              defaultValue="0"
              placeholder="Input"
              returnKeyType="done"
            />
          </Input>

          {/* Input Group 2 */}
          <FormControlLabel mb="$1">
            <FormControlLabelText>Side Landing</FormControlLabelText>
          </FormControlLabel>
          <Input justifyContent="center" alignItems="center">
            <InputField
              type="number"
              inputMode="numeric"
              defaultValue="0"
              placeholder="Input"
              returnKeyType="done"
            />
          </Input>
        </FormControl>
      </Box>

      {/* Bottom Button & Text Box */}
      <Box justifyContent="center" alignItems="center">
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          bgColor="#F24E1E"
        >
          <ButtonText>Next Shot </ButtonText>
        </Button>

        <Text> View all shots</Text>
      </Box>
    </Box>
  );
}
