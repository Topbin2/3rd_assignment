/* eslint-disable react/no-array-index-key */
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { getCarDetail } from "../../apis";
import { Header } from "../../components";
import { BlueBox, WhiteBox } from "../../components/Box";
import {
  converSegmentToCategory,
  convertFuelTypeToString,
  dateFormat,
  setCommas,
} from "../../utils";

export const ImgContainer = styled.section`
  height: 205px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MainInfo = styled.section`
  display: flex;
  flex-direction: column;
  height: 92px;
  padding: 20px;
  font-weight: 700;

  & > span {
    font-size: 20px;
    line-height: 24px;
  }

  & > strong {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const SubInfo = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 48px;
  padding: 0 21px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 400;
`;

export const MessageContainer = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;

const CarDetail = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand") as string;
  const name = searchParams.get("name") as string;
  const segment = searchParams.get("segment") as string;
  const fuelType = searchParams.get("fuelType") as string;

  const { data, isLoading } = useQuery({
    queryKey: ["car-detail", brand, name, segment, fuelType],
    queryFn: () => getCarDetail({ brand, name, segment, fuelType }),
  });

  return (
    <>
      <Header title="차량상세" isPrevButton />
      {isLoading && <MessageContainer>불러오는 중</MessageContainer>}
      {data && (
        <>
          <ImgContainer>
            <img
              src={data.attribute.imageUrl}
              alt={data.attribute.brand + data.attribute.name}
            />
          </ImgContainer>
          <MainInfo>
            <span>{data.attribute.brand}</span>
            <strong>{data.attribute.name}</strong>
          </MainInfo>
          <SubInfo>월 {setCommas(data.amount)}</SubInfo>
          <BlueBox title="차량 정보" />
          <WhiteBox
            title="차종"
            value={converSegmentToCategory(data.attribute.segment)}
          />
          <WhiteBox
            title="연료"
            value={convertFuelTypeToString(data.attribute.fuelType)}
          />
          <WhiteBox title="이용 가능일" value={dateFormat(data.startDate)} />
          {data.insurance.length !== 0 && <BlueBox title="보험" />}
          {data.insurance.map((insurance, index) => (
            <WhiteBox
              key={index}
              title={insurance.name}
              value={insurance.description}
            />
          ))}
          {data.additionalProducts.length !== 0 && <BlueBox title="추가상품" />}
          {data.additionalProducts.map((product, index) => (
            <WhiteBox key={index} title={product.name} value={product.amount} />
          ))}
        </>
      )}
    </>
  );
};

export default CarDetail;
