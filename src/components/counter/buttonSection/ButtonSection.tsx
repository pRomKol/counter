import React, {FC} from 'react';
import styled from "styled-components";
import {Button} from "./button/Button";
type CounterValueTypePropsType = {
    minValue: number
    maxValue: number
    changeValues: (value: number) => void
    setCounter: (counterValue: number) => void
    inputMinValue: number
    inputMaxValue: number
    setMaxValue: (maxValue:number) => void

}

export const ButtonSection: FC<CounterValueTypePropsType> = ({ setMaxValue, inputMaxValue, inputMinValue, setCounter ,changeValues, }) => {

    const changeValuesHandler = () => {
        setMaxValue(inputMaxValue)
        setCounter(inputMinValue)
        changeValues(inputMinValue)
    }

    return (
        <ButtonSectionWrapper>
            <Button onClick={changeValuesHandler} title={'set'} />
        </ButtonSectionWrapper>
    )


};

const ButtonSectionWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  margin-top: 20px;
`
