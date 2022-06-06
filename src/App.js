import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

    const [valueA, setValueA] = useState(false)
    const [valueB, setValueB] = useState(false)


    const changeValueC = () => {
        var valueC = ""
        if (!valueA && !valueB) valueC = "FALSE"
        if (valueA && !valueB) valueC = "[ A ]"
        if (!valueA && valueB) valueC = "[ B ]"
        if (valueA && valueB) valueC = "TRUE"
        return valueC
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <button name="a" 
                            className={(valueA)?"btn btn-lg btn-primary":"btn btn-lg btn-danger"}
                            onClick={() => setValueA(!valueA)}> [ A ] </button>
                        <button name="b" 
                            className={(valueB)?"btn btn-lg btn-primary":"btn btn-lg btn-danger"}
                            onClick={() => setValueB(!valueB)}> [ B ] </button>
                        <button name="c" className="btn btn-lg btn-light">{changeValueC()}</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
