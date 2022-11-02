import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 52px;
  height: 22px;
  padding: 4px 15px;
  border: none;
  border-radius: 42px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    font-size: ${theme.fontSize.small};
    font-weight: 700;
  `}
`;

const NewButton = () => {
  return <Button>신규</Button>;
};

export default NewButton;
