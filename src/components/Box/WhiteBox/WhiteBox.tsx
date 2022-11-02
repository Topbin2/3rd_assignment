import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.large};

  & > strong {
    font-weight: 700;
  }

  & > span {
    font-weight: 400;
  }
`;

interface Props {
  title: string;
  value: string;
}

const WhiteBox = ({ title, value }: Props) => {
  return (
    <Container>
      <strong>{title}</strong>
      <span>{value}</span>
    </Container>
  );
};

export default WhiteBox;
