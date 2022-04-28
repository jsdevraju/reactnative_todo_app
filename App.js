import React, { useState } from "react";
// import our all lib
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import all components
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

const App = () => {
  // demo data render
  const [data, setData] = useState([{ text: "Demo Data", id: 1 }]);

  // touchable opacity function
  const pressHandler = (id) => {
    setData((prevData) => {
      return prevData.filter((todo) => todo.id !== id);
    });
  };

  // submit handle function to handle state variable value
  const submitHandle = (text) => {
    if (text.length > 3) {
      setData((prevData) => {
        return [{ text, id: Math.random().toString() }, ...prevData];
      });
    } else {
      Alert.alert("Todo Must Be 3 Charter");
    }
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          // dismiss our Keyboard when we click any where in our ui
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView style={styles.container}>
          {/* Header Here */}
          <Header />
          <View style={styles.content}>
            {/* to from */}
            <AddTodo submitHandle={submitHandle} />
            <View style={styles.list}>
              {/* Render Todo Item */}
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default App;

// create styles sheet for our application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 10,
  },
});
