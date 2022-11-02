/* eslint-disable no-alert */
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getCarDetail } from "../apis";

export const useGetCarDetail = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand") || "";
  const name = searchParams.get("name") || "";
  const segment = searchParams.get("segment") || "";
  const fuelType = searchParams.get("fuelType") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["car-detail", brand, name, segment, fuelType],
    queryFn: () => getCarDetail({ brand, name, segment, fuelType }),
    onError: (error) => alert(error),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 5, // 5 minutes
  });

  return { data, isLoading };
};
