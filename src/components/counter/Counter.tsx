import React from 'react';
import styled from "styled-components";
import {Inputs} from "./Inputs/Inputs";
import {ButtonSection} from "./buttonSection/ButtonSection";

export const Counter = () => {
    return (
        <CounterWrapper>
            <Inputs/>
            <ButtonSection/>
        </CounterWrapper>
    );
};


const CounterWrapper = styled.div`
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;
  
`
