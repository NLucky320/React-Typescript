
import Todo from './components/Models/todo';
import Todos from './components/Todos';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
  ]
  return (
    <div className="App">
      <Todos items={todos}/>
    
    </div>
  );
}

export default App;
