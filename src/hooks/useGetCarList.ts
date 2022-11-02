import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCarList } from "../apis";
import { TCategory } from "../types/car";
import { convertCategoryToSegment } from "../utils";

export const useGetCarList = () => {
  const navigate = useNavigate();

  const [sortOption, setSortOption] = useState<TCategory>("전체");

  const { data, isLoading } = useQuery({
    queryKey: ["cars", sortOption],
    queryFn: () =>
      getCarList({ segment: convertCategoryToSegment(sortOption) }),
  });

  return { navigate, sortOption, setSortOption, data, isLoading };
};
