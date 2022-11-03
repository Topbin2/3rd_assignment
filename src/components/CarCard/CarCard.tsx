import { useNavigate } from "react-router-dom";

import { TFuelType, TSegment } from "../../types";
import {
  converSegmentToCategory,
  convertFuelTypeToString,
  dateCalculation,
  setCommas,
} from "../../utils";
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
}

const CarCard = (props: Props) => {
  const navigate = useNavigate();
  const { brand, name, segment, fuelType, amount, createdAt, imgUrl } = props;

  return (
    <S.Container
      onClick={() =>
        navigate({
          pathname: "/car",
          search: `?brand=${brand}&name=${name}&segment=${segment}&fuelType=${fuelType}`,
        })
      }
    >
      <S.Infos>
        <S.MainInfo>
          <span>{brand}</span>
          <span>{name}</span>
        </S.MainInfo>
        <S.SubInfo>
          <span>
            {converSegmentToCategory(segment)} /{" "}
            {convertFuelTypeToString(fuelType)}
          </span>
          <span>월 {setCommas(amount)} 원 부터</span>
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
