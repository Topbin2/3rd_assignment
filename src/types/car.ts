export type TCategory = "전체" | "대형" | "중형" | "소형" | "SUV";

export type TSegment = "C" | "D" | "E" | "SUV" | "";

export type TFuelType = "gasoline" | "ev" | "hybrid";
export interface ICar {
  id: number;
  startDate: string;
  createdAt: string;
  attribute: IAttribute;
  amount: number;
  insurance: IInsurance[];
  additionalProducts: IAdditionalProduct[];
}

export interface IAttribute {
  brand: string;
  name: string;
  segment: TSegment;
  fuelType: TFuelType;
  imageUrl: string;
}

export interface IInsurance {
  name: string;
  description: string;
}

export interface IAdditionalProduct {
  name: string;
  amount: number;
}
