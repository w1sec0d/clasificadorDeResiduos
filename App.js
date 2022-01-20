import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import SearchBox from "./components/SearchBox";
import Screen from "./components/Screen";

export default function App() {
  const [text, setText] = useState("Busca tu residuo");
  return (
    <Screen style={styles.container}>
      <SearchBox value={text} setValue={(newText) => setText(newText)} />
      <StatusBar style="auto" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
