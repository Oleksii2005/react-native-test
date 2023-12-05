import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/photobg.jpg")}
          style={styles.backgroundImage}
        ></ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
export default LoginScreen;
