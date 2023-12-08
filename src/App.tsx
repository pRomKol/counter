import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {CounterTabletSection} from "./components/counter/counterTabletSection/CounterTabletSection";
import {v1} from "uuid";

function App() {
    let [numValue, setValue] = useState<number>(0)
    const counterUp = (numValue: number) => {
        setValue(++numValue)
    }
    return (

        <div className="App">
            <Counter/>
            <CounterTabletSection
                counterUp={counterUp}
                numValue={numValue}/>
        </div>
    );
}

export default App;
