import { View, ImageBackground, StyleSheet } from "react-native";
import bgImage from "../../assets/Photo_background.jpg";

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
