import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

const SearchBox = () => {
  return (
    <View style={styles.textView}>
      <MaterialCommunityIcons
        color={colors.medium}
        name="magnify"
        size={30}
        style={styles.icon}
      />
      <TextInput value={"Busca tu residuo"} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    backgroundColor: colors.light,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 20,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: colors.medium,
    flex: 1,
  },
});

export default SearchBox;
