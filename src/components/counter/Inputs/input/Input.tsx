import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement> ) => void
    title: string
    value: number
}
export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        props.onChange(e)
    }

    return (
        <StyledInputWrapper>
            <StyledInputText>
                {props.title}
            </StyledInputText>
            <StyledInput value={props.value} onChange={onChangeHandler}/>
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

