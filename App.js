import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/AuthScreens/RegistrationScreen";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import Home from "./Screens/HomePages/Home";

const MainStack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
