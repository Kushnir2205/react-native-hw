import { StyleSheet, Text, View } from "react-native";

export const Redirect = ({ firstPart = "", secondPart = "" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.redirectText}>{firstPart}</Text>
      <Text style={{ ...styles.redirectText, textDecorationLine: "underline" }}>
        {secondPart}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 4,
  },
  redirectText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});
