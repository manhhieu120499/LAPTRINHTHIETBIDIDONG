
import { ToDoApp} from "./ToDoApp"
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
 
  return (
     <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}


