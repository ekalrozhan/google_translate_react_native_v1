import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

export default function HomeScreen(props) {
  const [enteredText, setEnteredText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Text style={styles.languageOptionText}>English</Text>
        </TouchableOpacity>

        <View style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={24} color={colors.lightGrey} />
        </View>

        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Text style={styles.languageOptionText}>French</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          multiline
          placeholder="Enter Text"
          style={styles.textInput}
          onChangeText={(text) => {
            setEnteredText(text);
          }}
        />
        <TouchableOpacity
          disabled={enteredText === ""}
          style={styles.iconContainer}
        >
          <Ionicons
            name="arrow-forward-circle"
            size={24}
            color={enteredText !== "" ? colors.primary : colors.primaryDisabled}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  languageContainer: {
    flexDirection: "row",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },

  languageOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },

  arrowContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  languageOptionText: {
    color: colors.primary,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },

  inputContainer: {
    flexDirection: "row",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },

  textInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "regular",
    letterSpacing: 0.3,
    height: 90,
    color: colors.textColor,
  },

  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
