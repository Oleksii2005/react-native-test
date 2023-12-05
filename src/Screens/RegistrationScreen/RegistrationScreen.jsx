import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input } from "../../components/index.js";
// import { Btn, Input } from "../../components/index.js";
// import Svg, { Path, Circle, Rect } from "react-native-svg";
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
              <View style={styles.userAvatar}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ position: "absolute", top: 81, left: 107 }}
                >
                  <Image source={require("../../../assets/images/plus.png")} />
                </TouchableOpacity>
                {/* <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="132"
                    height="120"
                    viewBox="0 0 132 120"
                    fill="none"
                  >
                    <Circle
                      cx="119.5"
                      cy="93.5"
                      r="12"
                      fill="white"
                      stroke="#FF6C00"
                    />
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M120 87H119V93H113V94H119V100H120V94H126V93H120V87Z"
                      fill="#FF6C00"
                    />
                  </Svg> */}

                {/* </TouchableOpacity> */}
              </View>
              <View style={styles.mainContent}>
                <Text style={styles.title}>Sign up</Text>
              </View>
              <View>
                <Input placeholder="Login" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
              </View>
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
  userAvatar: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    zIndex: 100,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    resizeMode: "cover",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    // fontFamily: "Roboto",
    fontSize: 30,
    // fontStyle: 500,
    // lineHeight: "normal",
    letterSpacing: 0,
  },
  mainContent: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 33,
  },
});
export default RegistrationScreen;
