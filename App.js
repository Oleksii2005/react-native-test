import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen, RegistrationScreen } from "./src/Screens/index.js";
// import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  //   "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
