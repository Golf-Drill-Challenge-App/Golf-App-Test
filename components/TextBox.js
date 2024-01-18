import React from "react";
import { TextInput } from "react-native-paper";

const TextBox = ({ value, onChangeText }) => {
  return (
    <TextInput
      mode="outlined"
      placeholder="Type something"
      value={value}
      keyboardType="numeric"
      returnKeyType="done"
      editable={true}
      onChangeText={onChangeText}
    />
  );
};

export default TextBox;
