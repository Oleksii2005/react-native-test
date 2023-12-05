import { Button, StyleSheet } from "react-native";
const Btn = () => {
  return <Button style={styles.btn}>Register</Button>;
};
const styles = StyleSheet.create({
  btn: {
    display: "flex",
    width: 343,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingTop: 85,
  },
});
export default Btn;
