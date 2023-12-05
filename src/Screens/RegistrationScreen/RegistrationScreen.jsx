import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/photobg.jpg")}
          style={styles.backgroundImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View style={styles.wrapper}>
              <View style={styles.userAvatar}></View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
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
  wrapper: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 45,
    width: "auto",
    height: 549,
    flexShrink: 0,
  },
  userAvatar: {},
});
export default RegistrationScreen;
