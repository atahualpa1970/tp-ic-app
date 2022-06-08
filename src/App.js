import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { changeValueC } from './controlChangeValue'

function App() {

    const [valueA, setValueA] = useState(false)
    const [valueB, setValueB] = useState(false)

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <h3>Integracion Continua V1.0</h3>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <button name="a" 
                            className={(valueA)?"btn btn-lg btn-primary":"btn btn-lg btn-danger"}
                            onClick={() => setValueA(!valueA)}> [ A ] </button>
                        <button name="b" 
                            className={(valueB)?"btn btn-lg btn-primary":"btn btn-lg btn-danger"}
                            onClick={() => setValueB(!valueB)}> [ B ] </button>
                        <button name="c" className="btn btn-lg btn-light">
                            {changeValueC(valueA, valueB)}
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
