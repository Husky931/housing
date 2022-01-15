import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import globalStyles from "../globalStylesheet/app";
import { Ionicons } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import { saveTokens } from "../util/tokenManager";
import { GlobalData } from "../components/context";

export default function LoginRegistedModal({ createdUserRerenden }) {
  const { setLoggedIn, httpRequest } = useContext(GlobalData);
  const [displayRegisterBox, setDisplayRegisterBox] = useState(false);
  const [displayLoginBox, setDisplayLoginBox] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailLoginBox, setEmailLoginBox] = useState("");
  const [passwordLoginBox, setPasswordLoginBox] = useState("");

  async function registerUser() {
    console.log("am here");
    console.log(name, lastName, email, password);
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      password.length === 0
    )
      return alert("please fill all the fields");
    try {
      let user = {
        fname: name,
        lname: lastName,
        email,
        pwd: password,
      };

      let registerRes = await httpRequest("/register", "POST", user);
      console.log(registerRes, "am res");
      if (registerRes.status === 201) {
        console.log("am terue");
        let loginRes = await httpRequest("/login", "POST", { email, password });
        if (loginRes.status === 201) {
          await saveTokens(loginRes.body);
          setLoggedIn(true);
        }
      } else {
        console.log(registerRes.body.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logInUserLoginBox() {
    if (passwordLoginBox.length === 0 || emailLoginBox.length === 0) {
      return alert("please enter your credentials");
    }

    try {
      let user = {
        email: emailLoginBox,
        password: passwordLoginBox,
      };
      let res = await httpRequest("/login", "POST", user);
      console.log(res, "i am res od logInUserLoginBox");

      if (res.status === 201) {
        await saveTokens(res.body);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.imagePreview}
            source={require("../images/front-image.jpg")}
          />
          {!displayLoginBox && !displayRegisterBox && (
            <View style={styles.signUpBox}>
              <Pressable
                style={styles.signUpForm}
                onPress={() => setDisplayRegisterBox(true)}
              >
                <Ionicons name="mail" size={25} color="#2eb6b6" />
                <Text
                  style={[
                    globalStyles.m_l_r_6,
                    globalStyles.fontSize2,
                    globalStyles.fontWeight700,
                  ]}
                >
                  Register with email
                </Text>
              </Pressable>
              <Pressable
                style={styles.logInForm}
                onPress={() => setDisplayLoginBox(true)}
              >
                <Ionicons name="log-in" size={25} color="white" />
                <Text
                  style={[
                    globalStyles.m_l_r_6,
                    styles.textColortextColor,
                    globalStyles.fontSize2,
                    globalStyles.fontWeight700,
                  ]}
                >
                  LOG IN
                </Text>
              </Pressable>
            </View>
          )}
          {displayLoginBox && (
            <View style={styles.signUpBox}>
              <View style={styles.registerTitleRow}>
                <View style={globalStyles.width100}>
                  <Text
                    style={[
                      globalStyles.fontSize3,
                      globalStyles.fontWeight700,
                      globalStyles.black,
                      globalStyles.textCenter,
                    ]}
                  >
                    LogIn
                  </Text>
                </View>
                <Pressable
                  style={[globalStyles.col_center, styles.closeBtnHolder]}
                  onPress={() => {
                    setDisplayLoginBox(false);
                  }}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={25}
                    color="black"
                  />
                </Pressable>
              </View>
              <View style={styles.formHolder}>
                <Text style={globalStyles.fontWeight700}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(e) => setEmailLoginBox(e)}
                  value={emailLoginBox}
                />
              </View>
              <View style={styles.formHolder}>
                <Text style={globalStyles.fontWeight700}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(e) => setPasswordLoginBox(e)}
                  value={passwordLoginBox}
                />
              </View>
              <Pressable
                style={styles.submitBtn}
                onPress={() => logInUserLoginBox()}
              >
                <Text
                  style={[
                    globalStyles.white,
                    globalStyles.fontWeight700,
                    globalStyles.fontSize2,
                  ]}
                >
                  Submit
                </Text>
              </Pressable>
            </View>
          )}
          {displayRegisterBox && (
            <View style={styles.signUpBox}>
              <View style={styles.registerTitleRow}>
                <View style={globalStyles.width100}>
                  <Text
                    style={[
                      globalStyles.fontSize3,
                      globalStyles.fontWeight700,
                      globalStyles.black,
                      globalStyles.textCenter,
                    ]}
                  >
                    Register
                  </Text>
                </View>
                <Pressable
                  style={[globalStyles.col_center, styles.closeBtnHolder]}
                  onPress={() => {
                    setDisplayRegisterBox(false);
                  }}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={25}
                    color="black"
                  />
                </Pressable>
              </View>
              <View style={styles.formHolder}>
                <Text style={globalStyles.fontWeight700}>First Name</Text>
                <TextInput
                  autoCapitalize="words"
                  style={styles.input}
                  onChangeText={(e) => setName(e)}
                  value={name}
                />
              </View>
              <View style={styles.formHolder}>
                <Text style={globalStyles.fontWeight700}>Last Name</Text>
                <TextInput
                  autoCapitalize="words"
                  style={styles.input}
                  onChangeText={(e) => setLastName(e)}
                  value={lastName}
                />
              </View>
              <View style={styles.formHolder}>
                <Text style={globalStyles.fontWeight700}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(e) => setEmail(e)}
                  value={email}
                />
              </View>
              <View style={styles.formHolder}>
                <Text style={globalStyles.fontWeight700}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(e) => setPassword(e)}
                  value={password}
                />
              </View>
              <Pressable
                style={styles.submitBtn}
                onPress={() => registerUser()}
              >
                <Text
                  style={[
                    globalStyles.white,
                    globalStyles.fontWeight700,
                    globalStyles.fontSize2,
                  ]}
                >
                  Submit
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    opacity: 0.795,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  modalBox: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  formHolder: {
    padding: 10,
    paddingLeft: 0,
  },
  registerTitleRow: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  input: {
    height: responsiveHeight(5),
    width: "100%",
    borderRadius: 5,
    color: "black",
    backgroundColor: "#2eb6b6",
    paddingLeft: 8,
  },
  imagePreview: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  signUpBox: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    borderRadius: 13,
    marginBottom: 10,
  },
  signUpForm: {
    borderWidth: 1,
    borderColor: "#2eb6b6",
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(9),
  },
  logInForm: {
    borderWidth: 1,
    borderColor: "#2eb6b6",
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2eb6b6",
    height: responsiveHeight(9),
  },
  textColor: {
    color: "#2eb6b6",
  },
  textColortextColor: {
    color: "white",
  },
  submitBtn: {
    backgroundColor: "#2eb6b6",
    width: responsiveWidth(30),
    height: responsiveHeight(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 7,
  },
  closeBtnHolder: {
    width: "auto",
    height: "auto",
  },
});
