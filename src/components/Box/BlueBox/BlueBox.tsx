import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 20px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    font-size: ${theme.fontSize.large};
    font-weight: 700;
  `}
`;

interface Props {
  title: string;
}

const BlueBox = ({ title }: Props) => {
  return <Container>차량 정보</Container>;
};

export default BlueBox;
