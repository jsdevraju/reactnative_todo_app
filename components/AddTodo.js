import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, Button, View } from 'react-native';

const AddTodo = ({submitHandle}) => {
    const [todo, setTodo] = useState('');

    // handler function
    const changeHander = (value) =>{
        setTodo(value)
    }

  return (
    <>
        <View>
            <TextInput
            placeholder='Add todo..'
            onChangeText={changeHander}
            style={styles.input}
            />
            <Button onPress={() => submitHandle(todo)} title='Add Todo' color='powderblue' />
        </View>
    </>
  )
}

export default AddTodo;


// create styles sheet for our application
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
  })