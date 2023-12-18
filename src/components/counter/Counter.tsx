import styled from "styled-components";
import {Inputs} from "./Inputs/Inputs";
import {ButtonSection} from "./buttonSection/ButtonSection";
import {FC, useState} from "react";

type CounterValueType = {
    changeMinValue: (value: number) => void
    maxValue: number
    startValue: number
    setCounter: (counterValue: number) => void
    setMaxValue: (maxValue: number) => void

}

export const Counter: FC<CounterValueType> = ({setMaxValue, setCounter, changeMinValue, startValue, maxValue}) => {
    const [inputMaxValue, setInputMaxValue] = useState(maxValue)
    const [inputMinValue, setInputMinValue] = useState(startValue)

    return (
        <CounterWrapper>
            <Inputs
                setInputMinValue={setInputMinValue}
                setInputMaxValue={setInputMaxValue}
                startValue={inputMinValue}
                maxValue={inputMaxValue}/>
            <ButtonSection
                setCounter={setCounter}
                minValue={startValue}
                maxValue={maxValue}
                changeValues={changeMinValue}
                inputMinValue={inputMinValue}
                inputMaxValue={inputMaxValue}
                setMaxValue={setMaxValue}/>
        </CounterWrapper>
    );
};


const CounterWrapper = styled.div`
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;
`
