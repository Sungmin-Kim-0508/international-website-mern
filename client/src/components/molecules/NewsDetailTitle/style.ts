import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const MainTitleWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const InputTitleWrapper = styled.section`
  margin-bottom: 2rem;
`;

export const SubTitleWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export const NameDateWarpper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  align-items: center;
  column-gap: 0.8rem;
`;

export const ButtonsWarpper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 0.8rem;
`;
