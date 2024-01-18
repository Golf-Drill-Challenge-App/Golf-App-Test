import React from "react";
import { TextInput } from "react-native-paper";

const TextBox = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode="outlined"
      placeholder="Type something"
      value={text}
      keyboardType="numeric"
      returnKeyType="done"
      editable={true}
      onChangeText={(newText) => setText(newText)}
    />
  );
};

export default TextBox;
