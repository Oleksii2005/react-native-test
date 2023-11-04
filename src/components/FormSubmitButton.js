import { StyleSheet, Pressable, Text } from "react-native";

const styles = StyleSheet.create({
  buttonSubmit: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // maxHeight: 50,
    borderRadius: 100,
    marginTop: 32,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
  },
  buttonSubmitTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

const FormSubmitButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonSubmit}>
      <Text style={styles.buttonSubmitTitle}>{title}</Text>
    </Pressable>
  );
};

export default FormSubmitButton;
