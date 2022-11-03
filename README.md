### 자주 사용하는 css의 경우 themeProvider를 통해 전역 관리
- d.ts 파일을 통해 자동 완성 기능 부여

```typescript
export const theme: DefaultTheme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    gray: "#D9D9D9",
    blue: "#0094FF",
  },
  fontSize: {
    small: "12px",
    medium: "14px",
    large: "17px",
    xLarge: "21px",
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
      blue: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}

root.render(
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
);
```

### 전체 차량 페이지
- `react-query` `custom hook`을 활용하여 컴포넌트와 서버 상태 분리

```typescript
// custom hook
const useGetCarList = () => {
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
```

```jsx
// CarList.tsx
const CarList = () => {
  const { sortOption, setSortOption, data, isLoading } = useGetCarList();

  return (
    <>
      <Header title="전체차량" isPrevButton={false} />
      <Category sortOption={sortOption} changeSortOption={setSortOption} />
      <ul>
        {isLoading && <MessageContainer>불러오는 중</MessageContainer>}
        {data && !data.length && (
          <MessageContainer>차량이 없습니다.</MessageContainer>
        )}
        {data &&
          data.map((car) => {
            const { id, attribute, amount, createdAt } = car;
            const { name, brand, segment, fuelType, imageUrl } = attribute;
            return (
              <CarCard
                key={id}
                name={name}
                brand={brand}
                segment={segment}
                fuelType={fuelType}
                imgUrl={imageUrl}
                amount={amount}
                createdAt={createdAt}
              />
            );
          })}
      </ul>
    </>
  );
};
```

### 차량 상세 페이지
- 유저 인터랙션이 없는 정적 페이지 -> `react-query` `staleTime` 활용하여 캐싱 (사용자 경험 향상, 서버 부담 낮춤)
- `searchParams` 활용하여 `brand` `name` `segment` `fuelType` 에 해당하는 차량 불러옴

```typescript
// custom hook
const useGetCarDetail = () => {
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
```

### 공통 유틸 함수 분리
- `segment`의 경우 
