import React from 'react';
import styled from "styled-components";
import {Counter} from "../Counter";

export const CounterTabletSection = () => {
    return (
        <CounterTabletWrapper>
            <Counter/>
        </CounterTabletWrapper>
    );
};

const CounterTabletWrapper = styled.div`
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;
`