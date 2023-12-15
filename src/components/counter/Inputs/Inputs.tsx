import React, {ChangeEvent, FC, useState} from 'react';
import styled from "styled-components";
import {Input} from "./input/Input";

type InputsPropsType = {
    onChangeMinValue: (value:number) => void
    startValue:number
    maxValue: number
    setInputMinValue: (counterValue: number) => void
    setInputMaxValue: (counterValue: number) => void

}

export const Inputs: FC<InputsPropsType> = ({setInputMinValue, setInputMaxValue, startValue, maxValue}) => {
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(+e.currentTarget.value)

    }
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(+e.currentTarget.value)

    }



    return (
        <StyledInputsWrapper>
            <Input value={maxValue} onChange={changeMaxValueHandler} title={'max value:'}/>
            <Input value={startValue} onChange={changeMinValueHandler} title={'start value:'}/>
        </StyledInputsWrapper>
    );
};

const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  gap: 100px;
  padding: 20px;
`
