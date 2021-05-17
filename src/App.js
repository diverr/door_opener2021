import './App.css';
import Button from "./Button";

function App() {
    let state = {
        version: '1.3.0'
    };


    return (
        <div className="App">
            <div style={{height: '130px'}}></div>
            <Button/>
            <br/><br/>
            <div className="version">{state.version}</div>
        </div>
    );
}

export default App;
