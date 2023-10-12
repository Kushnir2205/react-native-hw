import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import Button from "./components/Button";
import { Redirect } from "./components/Redirect";

export default function LoginScreen() {
  return (
    <View style={styles.wrap}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.formWrap}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.styledInput}
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.styledInput} placeholder="Пароль" />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.container}>
        <Button text={"Увійти"} />
        <Redirect firstPart="Немає акаунту?" secondPart="Зареєструватися" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
    paddingTop: 92,
  },
  keyboardAvoidingView: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
  },

  submitButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: "100%",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 80,

    backgroundColor: "white",
    alignItems: "center",
    rowGap: 16,
  },
  formWrap: {
    marginBottom: 43,
    rowGap: 16,
  },
  styleInput: {
    height: 50,
    padding: 16,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  },
});
