import styled from "styled-components";

export const ImgContainer = styled.section`
  height: 205px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarName = styled.section`
  display: flex;
  flex-direction: column;
  height: 92px;
  padding: 20px;
  font-weight: 700;

  & > span {
    font-size: 20px;
    line-height: 24px;
  }

  & > strong {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const CarAmount = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 48px;
  padding: 0 21px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 400;
`;

export const MessageContainer = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;
