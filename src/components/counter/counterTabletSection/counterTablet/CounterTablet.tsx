
import styled from "styled-components";

type ValuePropsType = {
    numValue: number
}
export const CounterTablet = (props: ValuePropsType) => {

    return (
        <StyledCounterTabletWrapper>
            {props.numValue}
        </StyledCounterTabletWrapper>
    );
};

const StyledCounterTabletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  font-size: 100px;
  padding: 50px 120px;
  color: #06f806;
`