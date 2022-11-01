import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const PrevIcon = styled(AiOutlineArrowLeft)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const PrevButton = () => {
  const navigate = useNavigate();
  return <PrevIcon onClick={() => navigate(-1)} />;
};

export default PrevButton;
