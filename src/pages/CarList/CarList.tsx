import { CarCard, Category, Header } from "../../components";
import { useGetCarList } from "../../hooks/useGetCarList";
import { MessageContainer } from "../CarDetail/CarDetail.style";

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

export default CarList;
