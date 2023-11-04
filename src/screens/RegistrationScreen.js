import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import bgImage from "../../assets/images/photo_bg.jpg";
import defaultAvatar from "../../assets/images/avatar.jpg";
import {
  Avatar,
  FormTitle,
  Input,
  FormSubmitButton,
  LinkButton,
  SvgPlusButton,
} from "../components";

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  box: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  buttonAdd: {
    position: "absolute",
    right: -12.5,
    bottom: 12.5,
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ff6c00",
  },
  buttonRemove: {
    borderColor: "#e8e8e8",
  },
  form: {
    position: "relative",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  formElements: {
    flex: 1,
    maxHeight: 182,
    rowGap: 16,
  },
});

const RegistrationScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarImage, setAvatarImage] = useState(null);

  const onSubmit = () => {
    alert("Submit");
  };

  const reset = () => {
    setUserName("");
    setEmail("");
    setPassword("");
  };

  const onLink = () => {
    alert("Link");
  };

  const addAvatar = () => setAvatarImage(defaultAvatar);

  const removeAvatar = () => setAvatarImage(null);

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={styles.box}>
            {avatarImage ? (
              <Avatar avatarImage={avatarImage} size={120} />
            ) : (
              <Avatar size={120} />
            )}
            {avatarImage ? (
              <SvgPlusButton
                onPress={removeAvatar}
                styleButton={{ ...styles.buttonAdd, ...styles.buttonRemove }}
                stroke="#e8e8e8"
                rotate="45"
              />
            ) : (
              <SvgPlusButton
                onPress={addAvatar}
                styleButton={styles.buttonAdd}
                stroke="#ff6c00"
              />
            )}
          </View>
          <FormTitle text="Реєстрація" handleMarginTop={92} />
          <View style={styles.formElements}>
            <Input
              inputName="userName"
              handleChange={setUserName}
              inputValue={userName}
            />
            <Input
              inputName="email"
              handleChange={setEmail}
              inputValue={email}
            />
            <Input
              inputName="password"
              handleChange={setPassword}
              inputValue={password}
            />
          </View>
          <FormSubmitButton text="Зареєструватися" onPress={onSubmit} />
          <LinkButton text="Вже є акаунт? Увійти" onPress={onLink} />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
