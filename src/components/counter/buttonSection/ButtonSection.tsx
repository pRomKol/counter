import React from 'react';
import styled from "styled-components";
import {Button} from "./button/Button";

export const ButtonSection = () => {
    return (
        <ButtonSectionWrapper>
            <Button value={'set'}/>
        </ButtonSectionWrapper>
    )


};

const ButtonSectionWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  margin-top: 20px;
`
