import { selector } from 'recoil';
import axios from 'axios';
import { TodoAtom } from './TodoAtom';

export const fetchTodosSelector = selector({
  key: 'fetchTodosSelector',
  get: async ({ get }) => {
    const response = await axios.get('https://665024f3ec9b4a4a6030e184.mockapi.io/api/v1/course/todo');
    return response.data;
  },
});