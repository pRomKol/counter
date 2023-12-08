import React from 'react';
import styled from "styled-components";
import {CounterTablet} from "./counterTablet/CounterTablet";
import {ButtonsSection} from "./ButtonsSection";

type ValueType = {
    numValue: number
    counterUp: (numValue: number) => void
}

export const CounterTabletSection = (props: ValueType) => {
    return (
        <CounterTabletWrapper>
            <CounterTablet numValue={props.numValue}/>
            <ButtonsSection numValue={props.numValue} counterUp={props.counterUp}/>
        </CounterTabletWrapper>
    );
};

const CounterTabletWrapper = styled.div`
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;

`