import { Button, Input } from "@rneui/base";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login({ connected, setConnected }) {
  const [username, setUserName] = useState();
  const [userInput, setUserInput] = useState();

  const onPressLogin = () => {
    console.log(userInput);
    setUserName(userInput);
    setConnected(true);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Login</Text> */}

      <Input
        style={styles.input}
        placeholder="Username"
        //leftIcon={{ type: "font-awesome", name: "chevron-left" }}
        onChangeText={setUserInput}
        value={userInput}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        title="Login"
        type="solid"
        icon={{ type: "font-awesome", name: "user", color: "white" }}
        onPress={onPressLogin}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    textAlign: "center",
  },
});
