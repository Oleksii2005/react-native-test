import { Text } from "react-native";

const FormTitle = ({ text, handleMarginTop = 32 }) => {
  return (
    <Text
      style={{
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        letterSpacing: 0.3,
        textAlign: "center",
        marginTop: handleMarginTop,
        marginBottom: 32,
      }}
    >
      {text}
    </Text>
  );
};

export default FormTitle;
