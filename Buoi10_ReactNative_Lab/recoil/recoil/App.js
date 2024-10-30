import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';

export default function App() {
  return (
    <RecoilRoot>
    <TodoList/>
    </RecoilRoot>
  );
}

