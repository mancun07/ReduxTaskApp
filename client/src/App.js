import AddTaskModal from "./components/AddTaskModal";
import EditTaskModal from "./components/EditTaskModal";
import TechListModal from "./components/TechListModal";
import AddTechModal from "./components/AddTechModal";
import ButtonSet from "./components/ButtonSet";
import TasksList from "./components/TasksList";
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navbar/>
     <div className="container">
          <TasksList/>
          <ButtonSet/>
          <AddTaskModal/>
          <EditTaskModal/>
          <TechListModal/>
          <AddTechModal/>
     </div>
    </div>
    </Provider>
  );
}

export default App;
