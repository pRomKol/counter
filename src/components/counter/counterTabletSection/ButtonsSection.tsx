import React from 'react';
import {Button} from "../buttonSection/button/Button";
import styled from "styled-components";

type ButtonPropsType = {
    counterUp?: (numValue: number) => void
    numValue?: number
}
export const ButtonsSection = (props: ButtonPropsType) => {
    return (
        <StyledButtonsWrapper>
            <Button value={'inc'}
                    counterUp={props.counterUp}
                    numValue={props.numValue}/>

            <Button  value={'reset'}
                     />


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

