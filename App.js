import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SearchBox from "./components/SearchBox";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen style={styles.container}>
      <SearchBox />
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
