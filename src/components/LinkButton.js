import { StyleSheet, Pressable, Text } from "react-native";

const styles = StyleSheet.create({
  buttonLink: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonLinkTitle: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

const LinkButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonLink}>
      <Text style={styles.buttonLinkTitle}>{title}</Text>
    </Pressable>
  );
};

export default LinkButton;
