import React from "react";
import { Text, StyleSheet, View } from "react-native";
const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Your All Todos</Text>
      </View>
    </>
  );
};

export default Header;

// our application header styles here
const styles = StyleSheet.create({
  header: {
    backgroundColor: "skyblue",
    height: 80,
    paddingTop: 38,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
