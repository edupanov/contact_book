import './App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderMainForm from "../components/mainForm/HeaderMainForm";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderMainForm/>

            </div>
        </BrowserRouter>
    );
}

export default App;
