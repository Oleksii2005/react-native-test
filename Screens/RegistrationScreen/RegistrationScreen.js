import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import bgImage from "../imgs/photo_BG.jpg";

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    position: "relative",
  },
});

const RegistrationScreen = () => {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imgBg}>
      <View style={styles.form}></View>
    </ImageBackground>
  );
};
export default RegistrationScreen;
