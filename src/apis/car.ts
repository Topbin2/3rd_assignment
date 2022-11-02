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
