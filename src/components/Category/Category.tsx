import styled from "styled-components";

import { TCategory } from "../../types";
import { CategoryButton } from "../Buttons";

export const Container = styled.menu`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  overflow: auto;
  white-space: nowrap;
`;

const CATEGORY_LIST: Array<TCategory> = ["전체", "대형", "중형", "소형", "SUV"];

interface Props {
  sortOption: string;
  changeSortOption: React.Dispatch<React.SetStateAction<TCategory>>;
}

const Category = ({ sortOption, changeSortOption }: Props) => {
  return (
    <Container>
      {CATEGORY_LIST.map((category) => (
        <CategoryButton
          key={category}
          title={category}
          isClicked={category === sortOption}
          onClick={() => changeSortOption(category)}
        />
      ))}
    </Container>
  );
};

export default Category;
