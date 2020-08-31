import React from 'react';
import { Store } from "./store/store";
import Calculator from "./component/calculator";
import './App.css';

function App() {

    return (
        <div className="App">
            <Store>
                <Calculator></Calculator>
            </Store>
        </div>
    );
}

export default App;
