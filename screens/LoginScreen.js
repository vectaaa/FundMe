import React, { useState } from "react";
import Logo from "../assets/grafik1.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import FingerPrintButton from "../custom_buttons/fingerprint_button";
import LoginButton from "../custom_buttons/login_button";
import CustomInput from "../extras/customInput";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";

function LoginScreen(props) {
  const { height } = useWindowDimensions();

  const {username, password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Login");
    props.navigation.navigate("AccountRoute");
  };

  const onFingerPrintPressed = () => {
    console.warn("Finger Biometric");
    props.navigation.navigate("AccountRoute");
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.wlcm}>Welcome Back {username}</Text>
      <Text>Username</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <Text>Password</Text>
      <CustomInput
        placeholder="Password"
        value={password}
        setPassword={setPassword}
        secureTextEntry={true}
      />
      {/* The button and onPressed */}
      <View style={styles.arrangebtn}>
        <LoginButton text="Login" onPress={onSignInPressed} />
        <FingerPrintButton onPress={onFingerPrintPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: "60%",
    maxWidth: 200,
    maxHeight: 80,
    marginTop: 40,
    marginBottom: 20,
  },
  arrangebtn: {
    height: 30,
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
  wlcm: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
  },
});

export default LoginScreen;
