
import styled from "styled-components";

type StyledPropsType = {
    maxValue?: number
    numValue?: number
}
type ValuePropsType = {
    numValue: number
    maxValue: number
}
export const CounterTablet = (props: ValuePropsType) => {

    return (
        <StyledCounterTabletWrapper maxValue={props.maxValue} numValue={props.numValue}>
            {props.numValue}
        </StyledCounterTabletWrapper>
    );
};

const StyledCounterTabletWrapper = styled.div<StyledPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  font-size: 100px;
  padding: 50px 120px;
  color: ${props => props.maxValue === props.numValue? 'red' :'#06f806'} ;
`