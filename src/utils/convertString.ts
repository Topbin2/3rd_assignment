import { TCategory, TFuelType, TSegment } from "../types";

export const converSegmentToCategory = (segment: TSegment) => {
  switch (segment) {
    case "C":
      return "소형";
    case "D":
      return "중형";
    case "E":
      return "대형";
    case "SUV":
      return "SUV";
    default:
      throw new Error("segment 타입을 확인해주세요.");
  }
};

export const convertCategoryToSegment = (category: TCategory) => {
  switch (category) {
    case "전체":
      return "";
    case "소형":
      return "C";
    case "중형":
      return "D";
    case "대형":
      return "E";
    case "SUV":
      return "SUV";
    default:
      throw new Error("segment 타입을 확인해주세요.");
  }
};

export const convertFuelTypeToString = (fuelType: TFuelType) => {
  switch (fuelType) {
    case "gasoline":
      return "가솔린";
    case "hybrid":
      return "하이브리드";
    case "ev":
      return "전기";
    default:
      throw new Error("fuelType을 확인해주세요.");
  }
};
