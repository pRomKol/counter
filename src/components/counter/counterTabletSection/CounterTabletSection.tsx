import React from 'react';
import styled from "styled-components";
import {CounterTablet} from "./counterTablet/CounterTablet";
import {ButtonsSection} from "./ButtonsSection";

type ValueType = {
    numValue: number
    counterUp: () => void
    resetCounter: () => void
    maxValue: number
    startValue: number
}

export const CounterTabletSection = (props: ValueType) => {
    return (
        <CounterTabletWrapper>

            <CounterTablet numValue={props.numValue}/>
            <ButtonsSection
                startValue={props.startValue}
                maxValue={props.maxValue}
                numValue={props.numValue}
                counterUp={props.counterUp}
                resetCounter={props.resetCounter}/>
        </CounterTabletWrapper>
    );
};

const CounterTabletWrapper = styled.div`
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;

`