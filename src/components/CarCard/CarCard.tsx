import { TFuelType, TSegment } from "../../types";
import { dateCalculation } from "../../utils";
import { NewButton } from "../Buttons";
import * as S from "./CarCard.style";

interface Props {
  brand: string;
  name: string;
  segment: TSegment;
  fuelType: TFuelType;
  amount: number;
  createdAt: string;
  imgUrl: string;
  onClick: () => void;
}

const CarCard = (props: Props) => {
  const { brand, name, segment, fuelType, amount, createdAt, imgUrl, onClick } =
    props;

  return (
    <S.Container onClick={onClick}>
      <S.Infos>
        <S.MainInfo>
          <span>{brand}</span>
          <span>{name}</span>
        </S.MainInfo>
        <S.SubInfo>
          <span>
            {segment} / {fuelType}
          </span>
          <span>월 {amount} 원 부터</span>
        </S.SubInfo>
      </S.Infos>
      <S.ImgContainer>
        <img src={imgUrl} alt={brand + name} />
        {dateCalculation(new Date(createdAt)) && <NewButton />}
      </S.ImgContainer>
    </S.Container>
  );
};

export default CarCard;
