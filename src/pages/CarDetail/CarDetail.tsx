/* eslint-disable react/no-array-index-key */

import { Header } from "../../components";
import { BlueBox, WhiteBox } from "../../components/Box";
import { useGetCarDetail } from "../../hooks";
import {
  converSegmentToCategory,
  convertFuelTypeToString,
  dateFormat,
  setCommas,
} from "../../utils";
import * as S from "./CarDetail.style";

const CarDetail = () => {
  const { data, isLoading } = useGetCarDetail();

  return (
    <>
      <Header title="차량상세" isPrevButton />
      {isLoading && <S.MessageContainer>불러오는 중</S.MessageContainer>}
      {data && (
        <>
          <S.ImgContainer>
            <img
              src={data.attribute.imageUrl}
              alt={data.attribute.brand + data.attribute.name}
            />
          </S.ImgContainer>
          <S.CarName>
            <span>{data.attribute.brand}</span>
            <strong>{data.attribute.name}</strong>
          </S.CarName>
          <S.CarAmount>월 {setCommas(data.amount)} 원</S.CarAmount>
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
