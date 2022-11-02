export const dateCalculation = (createdAt: Date) => {
  const today = new Date();
  const yesterday = today.setDate(today.getDate() - 1);

  return yesterday - Number(createdAt) < 0;
};

export const dateFormat = (startedAt: string) => {
  const convertStringToDate = new Date(startedAt);

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const month = convertStringToDate.getMonth();
  const day = convertStringToDate.getDate();
  const dayOfWeek = week[convertStringToDate.getDay()];

  return `${month}월 ${day}일 (${dayOfWeek}) 부터`;
};
