import { useState } from "react";
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
import { Button, Input } from "../../components/index.js";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              </View>
              <View style={styles.mainContent}>
                <Text style={styles.title}>Sign up</Text>
              </View>
              <View>
                <Input
                  placeholder="Login"
                  value={login}
                  onChangeText={setLogin}
                />
                <Input
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
                <View style={{ position: "relative" }}>
                  <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                  />
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
                <Button text={"Register"} styleProps={{ marginTop: 27 }} />
                <TouchableOpacity>
                  <Text style={styles.bottomTitle}>
                    Already have an account? Sign in.
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
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: 500,
    lineHeight: "normal",
    letterSpacing: 0,
  },
  mainContent: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 33,
  },
  placeholder: {
    alignSelf: "flex-end",
    color: "#1B4371",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
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
export default RegistrationScreen;
