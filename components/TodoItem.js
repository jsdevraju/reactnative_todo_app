import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <>
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoItem;

// create styles sheet for our application
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor:'steelblue',
    color:'#fff',
    textAlign:'center'
  },
});
