import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const Infos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 700;
    line-height: 17px;
  }
`;

export const SubInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 500;
    line-height: 15px;
  }
`;

export const ImgContainer = styled.section`
  position: relative;
  width: 152px;
  height: 80px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  & > button {
    position: absolute;
    top: -12px;
    right: -12px;
  }
`;
