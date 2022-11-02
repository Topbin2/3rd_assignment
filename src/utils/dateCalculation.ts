export const dateCalculation = (createdAt: Date) => {
  const today = new Date();
  const yesterday = today.setDate(today.getDate() - 1);

  return yesterday - Number(createdAt) < 0;
};

dateCalculation(new Date("2022-11-02T13:37:51.980Z"));
