import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';  
import './App.css';
import TaskList from './components/TaskList/TaskList';
import { Provider } from './context/zentaskContext';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <span><h2>Zen Task Todo List</h2></span>
          <Provider>
            <Routes>
                <Route exact={true} path='/' element={<TaskList />}>
                  <TaskList />
                </Route>
            </Routes>
          </Provider>
        </header>
      </div>
    </Router>
  );
}

export default App;
