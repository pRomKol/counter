import React from 'react';
import styled from "styled-components";

type InputPropsType = {
    value: string
}
export const Input = (props: InputPropsType) => {
    return (
        <StyledInputWrapper>
            <StyledInputText>
                {props.value}
            </StyledInputText>
            <StyledInput/>
        </StyledInputWrapper>

    );
};
const StyledInput = styled.input.attrs({type :'number'})`
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  height: 40px;
  margin-left: 30px;
`
const StyledInputWrapper = styled.div`
display: flex;
  justify-content: space-between;
`
const StyledInputText = styled.span`
  color: #da4242;
  font-size: 2rem;
  
`

