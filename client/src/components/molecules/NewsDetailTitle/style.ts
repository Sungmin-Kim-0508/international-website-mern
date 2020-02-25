import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const MainTitleWrapper = styled.section`
  display: grid;
  justify-content: left;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  margin-bottom: 2rem;
`;

export const InputTitleWrapper = styled.section`
  margin-bottom: 2rem;
`;

export const SubTitleWrapper = styled.section`
  display: flex;
  justify-content: space-around;
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
