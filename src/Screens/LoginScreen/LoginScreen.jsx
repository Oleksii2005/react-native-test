import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "../../components/index.js";
const LoginScreen = () => {
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
              <View style={styles.mainContent}>
                <Text style={styles.title}>Sign in</Text>
              </View>
              <View>
                <Input placeholder="Email" />
                <View style={{ position: "relative" }}>
                  <Input placeholder="Password" />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      position: "absolute",
                      right: 30,
                      top: 17,
                    }}
                  >
                    <Text
                      style={{
                        color: "#1B4371",
                        fontSize: 16,
                      }}
                    >
                      Show
                    </Text>
                  </TouchableOpacity>
                </View>
                <Button text={"Login"} styleProps={{ marginTop: 27 }} />
                <TouchableOpacity>
                  <Text style={styles.bottomTitle}>
                    Don't have an account? Sign up
                  </Text>
                </TouchableOpacity>
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
    height: 489,
    flexShrink: 0,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: 500,
    lineHeight: "normal",
    letterSpacing: 0,
  },
  mainContent: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
  },
  bottomTitle: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    marginTop: 16,
  },
});
export default LoginScreen;
