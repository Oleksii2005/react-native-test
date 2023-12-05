import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen, RegistrationScreen } from "./src/Screens/index.js";
// import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
