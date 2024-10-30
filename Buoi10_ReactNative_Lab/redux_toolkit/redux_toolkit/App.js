import { Text, SafeAreaView, StyleSheet } from 'react-native';
import TodoList from "./TodoList"
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
     <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

