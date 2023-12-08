import styled from "styled-components";


type ButtonPropsType = {
    numValue?: number
    counterUp?: (numValue: number) => void
    value?:string
}
export const Button = (props: ButtonPropsType) => {
   const onClickHandler = () => {
       props.counterUp(props.numValue)
   }
    return (
        <StyledButton onClick={onClickHandler}>
            {props.value}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  background-color: cadetblue;
  color: rgba(144, 2, 248, 0.7);
  font-size: 55px;
  border-radius: 10px;
  border: 0;
  margin: 30px 0;
`