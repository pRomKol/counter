import React from 'react';
import styled from "styled-components";
import {Input} from "./input/Input";

export const Inputs = () => {
    return (
        <StyledInputsWrapper>
            <Input value={'max value:'}/>
            <Input value={'start value:'}/>
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
