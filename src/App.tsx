import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {CounterTabletSection} from "./components/counter/counterTabletSection/CounterTabletSection";


function App() {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(startValue)


    const resetCounter = () => {
        setCounter(startValue)

    }


    const counterUp = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="App">
            <Counter
                changeMinValue={setStartValue}
                maxValue={maxValue}
                startValue={startValue}
                setCounter={setCounter}
                setMaxValue={setMaxValue}



            />
            <CounterTabletSection
                maxValue={maxValue}
                resetCounter={resetCounter}
                counterUp={counterUp}
                numValue={counter}
                startValue={startValue}
            />
        </div>
    );
}

export default App;
