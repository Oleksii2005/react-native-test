import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import inputProps from "../../assets/data/input.json";

const styles = StyleSheet.create({
  input: {
    padding: 16,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
});

const Input = ({ inputName, handleChange, inputValue }) => {
  // const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const { placeholder, pattern, type, minlength } = inputProps[inputName];
  if (type === "password" && !secureTextEntry) setSecureTextEntry(true);

  const toggleFocus = (focusStatus) => {
    if (isFocused !== focusStatus) setIsFocused(focusStatus);
  };

  // const handleChange = value => {
  //     if (value && inputValue !== value) type === "userName"  ? setInputValue(value.trimStart()) : setInputValue(value.trim());
  // }

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      onChangeText={handleChange}
      onFocus={() => {
        toggleFocus(true);
      }}
      onBlur={() => {
        toggleFocus(false);
      }}
      value={inputValue}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      pattern={pattern}
      type={type}
      minlength={minlength || "0"}
      maxlength="30"
      secureTextEntry={secureTextEntry}
      required
    ></TextInput>
  );
};

export default Input;
