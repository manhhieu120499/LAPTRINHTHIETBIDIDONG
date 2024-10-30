import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoAtom } from './TodoAtom';
import { fetchTodosSelector } from './TodoSelector';
import { View, Text, Button, FlatList, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(TodoAtom);
  const fetchedTodos = useRecoilValue(fetchTodosSelector);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      try {
        const response = await fetchedTodos; 
        setTodos(response);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, [setTodos, fetchedTodos]);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      setLoading(true);
      try {
        const response = await axios.post("https://66fc9741c3a184a84d176b30.mockapi.io/bai1", {
          title: newTodo,
        });
        setTodos((prev) => [...prev, response.data]); 
        setNewTodo('');
      } catch (error) {
        console.error('Error adding todo:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Add a todo"
        value={newTodo}
        onChangeText={setNewTodo}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Add" onPress={handleAddTodo} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}
    </View>
  );
};

export default TodoList;