import { ICar, TSegment } from "../types";
import { axiosInstance } from "../utils";

export const getCarList = async ({
  segment,
}: {
  segment: TSegment;
}): Promise<ICar[]> => {
  const { data } = await axiosInstance.get(`/api/cars?segment=${segment}`);
  return data.payload;
};

interface Payload {
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
}

export const getCarDetail = async (payload: Payload): Promise<ICar> => {
  const { brand, name, segment, fuelType } = payload;
  const { data } = await axiosInstance.get(
    `/api/cars?brand=${brand}&name=${name}&segment=${segment}&fuelType=${fuelType}`
  );

  // EV6, 아이오닉5 차량이 중복으로 response 오는 버그
  if (data.payload.length > 1) {
    const filteredData = data.payload.filter(
      (car: ICar) => car.attribute.name === name
    );

    return filteredData[0];
  }

  return data.payload[0];
};
