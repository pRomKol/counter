import styled from "styled-components";


type ButtonPropsType = {
    title: string
    onClick:()=>void
    numValue?: number
    counter?:number
    maxValue?: number
    startValue?: number
    isDisabled?: boolean
}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.onClick?.()
    }

    return (
        <StyledButton disabled={ props.isDisabled } onClick={onClickHandler}>
            {props.title}
        </StyledButton>
    );
};

const StyledButton = styled.button<StyledButtonType>`
  background-color: cadetblue;
  color: ${(props) => props.disabled?'rgba(144, 2, 248, 0.3)': 'rgba(144, 2, 248, 0.7)'}; 
  font-size:55px;
  border-radius: 10px;
  border: 0;
  margin: 30px 0;
  pointer-events:${(props)=>props.disabled?'none':null};
`
type StyledButtonType = {
    disabled?: boolean
}