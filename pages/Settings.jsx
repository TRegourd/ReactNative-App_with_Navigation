import { Button } from "@rneui/base";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../AuthProvider";

const SettingsStack = createNativeStackNavigator();

export default function Settings() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings Home"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function SettingsScreen({ navigation }) {
  const { logged, setLogged } = useContext(AuthContext);

  const onPressLogout = () => {
    setLogged(!logged);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Logout"
        type="solid"
        icon={{ type: "font-awesome", name: "user", color: "white" }}
        onPress={onPressLogout}
      ></Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}
