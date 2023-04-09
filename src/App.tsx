import "./App.scss";
import { ListTodos } from "./components/ListTodos/ListTodos";
import { Login } from "./components/Login/Login";

function App() {
    return (
        <div className="App">
            {/* <Login /> */}
            <ListTodos />
        </div>
    );
}

export default App;
