import styled, { css } from "styled-components";

export const Button = styled.button<{ isClicked: boolean }>`
  width: 62px;
  height: 27px;
  padding: 5px 18px;
  border: none;
  border-radius: 62px;
  font-weight: 700;
  transition: all 0.4s;

  ${({ isClicked, theme }) => css`
    color: ${isClicked ? theme.colors.white : theme.colors.black};
    background-color: ${isClicked ? theme.colors.black : theme.colors.gray};
    font-size: ${theme.fontSize.medium};
  `}
`;

interface Props {
  title: string;
  isClicked: boolean;
  onClick: () => void;
}

const CategoryButton = ({ title, isClicked, onClick }: Props) => {
  return (
    <Button isClicked={isClicked} onClick={onClick}>
      {title}
    </Button>
  );
};

export default CategoryButton;
