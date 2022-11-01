import styled from "styled-components";

import { PrevButton } from "../Buttons";

export const SHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  & > h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
  }

  & > svg {
    position: absolute;
    left: 25px;
  }
`;

interface Props {
  title: string;
  isPrevButton: boolean;
}

const Header = ({ title, isPrevButton }: Props) => {
  return (
    <SHeader>
      {isPrevButton && <PrevButton />}
      <h1>{title}</h1>
    </SHeader>
  );
};

export default Header;
