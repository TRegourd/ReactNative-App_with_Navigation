import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Account from "./pages/Account";

import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "./AuthProvider";

export default function App() {
  //   const [connected, setConnected] = useState(false);

  const { logged, setLogged } = useContext(AuthContext);

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      {!logged && <Login />}
      {logged && (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = "ios-home";
                } else if (route.name === "Settings") {
                  iconName = "ios-list";
                } else if (route.name === "My Account") {
                  iconName = "ios-person";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="My Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            ></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
