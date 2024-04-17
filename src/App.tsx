import React, { useState } from "react";
import { Alert, Button, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./components/TodoCard/style";
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<{ id: string, text: string, completed: boolean }>>([]);
  const [inputValue, setInputValue] = useState('');
  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

  }
  const updateTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, text } : todo));

  }
  const incrementCount = () => {
    setCount(count + 1);

  },
    decrementCount = () => {
      if (count > 0) {
        setCount(count - 1);
      }

    }
  const handleCompletedTasks = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    if (newTodos[index].completed) {
      incrementCount();
    } else {
      decrementCount();

    }
    setTodos(newTodos);
  }
  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  const completedTodoCount = todos.length - activeTodoCount;
  const handleLongPress = (id: string) => {
    Alert.alert(
      "Todo Sil",
      "Bu todo'yu silmek istiyor musunuz?",
      [
        {
          text: "Hayır",
          onPress: () => console.log("Silme iptal edildi"),
          style: "cancel"
        },
        {
          text: "Evet",
          onPress: () => removeTodo(id)
        }
      ],
      { cancelable: false }
    );
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <Text style={styles.appTitle}>My Todo App</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <Text style={styles.title}>Eklenen Görevler : {activeTodoCount}</Text>
          <Text style={styles.title}>Tamamlanan Görevler : {completedTodoCount}</Text>
        </View>
        <FlatList data={todos} renderItem={({ item, index }) => <View >
          <TouchableOpacity style={styles.toggleButton} onPress={() => toggleTodo(item.id)} onLongPress={() => handleLongPress(item.id)}>
            <Text style={[styles.title, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>{item.text}</Text>
          </TouchableOpacity>
        </View>}
          keyExtractor={(item) => item.id}
          numColumns={2}
        >

        </FlatList>
        <TextInput style={styles.textInput} placeholder="Görev Ekle" 
        onChangeText={(value) => setInputValue(value)} value={inputValue}></TextInput>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style=
            {styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App