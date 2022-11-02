import { NewButton } from "../Buttons";
import * as S from "./CarCard.style";

type TSegment = "C" | "D" | "E" | "SUV";
type TFuelType = "gasoline" | "ev" | "hybrid";

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
  const { brand, name, segment, fuelType, amount, createdAt, imgUrl } = props;

  return (
    <S.Container>
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
        <NewButton />
      </S.ImgContainer>
    </S.Container>
  );
};

export default CarCard;
