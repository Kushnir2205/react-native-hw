import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet } from "react-native";

import { authStateChangeUser } from "../redux/auth/authOperations";
import { selectStateChange, selectUser } from "../redux/auth/authSelections";

import LoginScreen from "./AuthScreens/LoginScreen";
import RegistrationScreen from "./AuthScreens/RegistrationScreen";
import Home from "./HomePages/Home";

const MainStack = createStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const { stateChange } = useSelector(selectUser);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return (
    <NavigationContainer>
      {!stateChange ? (
        <MainStack.Navigator
          initialRouteName="Regestration"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen
            name="Regestration"
            component={RegistrationScreen}
          />
        </MainStack.Navigator>
      ) : (
        <MainStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
