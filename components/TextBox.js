import * as React from "react";
import { TextInput } from "react-native-paper";

const TextBox = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      value={text}
      keyboardType="numeric"
      returnKeyType="done"
      editable={true}
      onChangeText={(newText) => setText(newText)}
      right={<TextInput.Affix text="/100" />}
    />
  );
};

export default TextBox;
