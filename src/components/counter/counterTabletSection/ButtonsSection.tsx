import React from 'react';
import {Button} from "../buttonSection/button/Button";
import styled from "styled-components";

type ButtonPropsType = {
    resetCounter?: () => void
    counterUp: () => void
    numValue?: number
    maxValue: number
    startValue: number
}
export const ButtonsSection = (props: ButtonPropsType) => {
    const resetCounter = () => {
        props.resetCounter?.()
    }
    const incCounter = () => {
        props.counterUp()
    }
    const  disabledReset = props.numValue === props.startValue
    const disabledInc = props.numValue === props.maxValue
    return (
        <StyledButtonsWrapper>
            <Button
                startValue={props.startValue}
                numValue={props.numValue}
                maxValue={props.maxValue}
                title={'inc'}
                isDisabled={disabledInc}
                onClick={incCounter}  />

            <Button  title={'reset'}
                     isDisabled={disabledReset}
                     onClick={resetCounter}/>


        </StyledButtonsWrapper>
    );
};
const StyledButtonsWrapper = styled.div`
  display: flex;
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  margin-top: 20px;
  justify-content: space-around;
`

