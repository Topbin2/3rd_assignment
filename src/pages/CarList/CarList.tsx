import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getCarList } from "../../apis";
import { CarCard, Category, Header } from "../../components";
import { TCategory } from "../../types";
import { convertCategoryToSegment } from "../../utils";

export const MessageContainer = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;

const CarList = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState<TCategory>("전체");
  const { data, isLoading } = useQuery({
    queryKey: ["cars", sortOption],
    queryFn: () =>
      getCarList({ segment: convertCategoryToSegment(sortOption) }),
  });

  return (
    <>
      <Header title="전체차량" isPrevButton={false} />
      <Category sortOption={sortOption} changeSortOption={setSortOption} />
      <ul>
        {isLoading && <MessageContainer>불러오는 중</MessageContainer>}
        {data && !data.length && (
          <MessageContainer>차량이 없습니다.</MessageContainer>
        )}
        {data?.map((car) => {
          const { id, attribute, amount, createdAt } = car;
          const { name, brand, segment, fuelType, imageUrl } = attribute;
          return (
            <CarCard
              key={id}
              name={name}
              brand={brand}
              segment={segment}
              fuelType={fuelType}
              imgUrl={imageUrl}
              amount={amount}
              createdAt={createdAt}
              onClick={() =>
                navigate({
                  pathname: "/car",
                  search: `?brand=${brand}&name=${name}&segment=${segment}&fuelType=${fuelType}`,
                })
              }
            />
          );
        })}
      </ul>
    </>
  );
};

export default CarList;
