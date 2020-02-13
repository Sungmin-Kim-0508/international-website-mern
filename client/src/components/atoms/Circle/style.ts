import styled from "styled-components";

type StyledCircleProps = {
  radiusLength: Number;
};

export const StyledCircle = styled.span<StyledCircleProps>`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background-color: grey;
`;
