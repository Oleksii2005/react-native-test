import { StyleSheet, View, Pressable, ImageBackground } from "react-native";
import SvgPlus from "./SvgPlus";

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  avatarImage: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  buttonAdd: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -12.5,
    bottom: 12.5,
    width: 25,
    height: 25,
  },
});

const Avatar = ({ avatarImage = null }) => {
  return (
    <View style={styles.box}>
      <ImageBackground
        source={avatarImage}
        resizeMode="cover"
        style={styles.avatarImage}
      />
      <Pressable
        onPress={() => {
          alert("add avatar");
        }}
        style={styles.buttonAdd}
      >
        {/* {({ pressed }) => (
          <SvgPlus stroke={pressed ? '#e8e8e8' : '#ff6c00'} rotate = {pressed ? '45' : '0'}/>
          )}   */}
        <SvgPlus
          stroke={avatarImage ? "#e8e8e8" : "#ff6c00"}
          rotate={avatarImage ? "45" : "0"}
        />
      </Pressable>
    </View>
  );
};

export default Avatar;
