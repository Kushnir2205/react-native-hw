import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
