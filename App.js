import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import Background from "./Screens/components/Background";

export default function App() {
  return (
    <View style={styles.container}>
      <Background>
        <RegistrationScreen />
      </Background>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
