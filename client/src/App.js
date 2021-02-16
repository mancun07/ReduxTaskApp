import AddLogModal from "./components/AddLogModal";
import EditLogModal from "./components/EditLogModal";
import TechListModal from "./components/TechListModal";
import AddTechModal from "./components/AddTechModal";
import ButtonSet from "./components/ButtonSet";
import LogsList from "./components/LogsList";
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navbar/>
     <div className="container">
          <LogsList/>
          <ButtonSet/>
          <AddLogModal/>
          <EditLogModal/>
          <TechListModal/>
          <AddTechModal/>
     </div>
    </div>
    </Provider>
  );
}

export default App;
