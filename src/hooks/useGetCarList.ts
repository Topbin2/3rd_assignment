/* eslint-disable no-alert */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCarList } from "../apis";
import { TCategory } from "../types/car";
import { convertCategoryToSegment } from "../utils";

export const useGetCarList = () => {
  const [sortOption, setSortOption] = useState<TCategory>("전체");

  const { data, isLoading } = useQuery({
    queryKey: ["cars", sortOption],
    queryFn: () =>
      getCarList({ segment: convertCategoryToSegment(sortOption) }),
    onError: (error) => alert(error),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { sortOption, setSortOption, data, isLoading };
};
