import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background: ${theme.color.lightGrey};
`;

export const Content = styled.article`
  display: flex;
  background: ${theme.color.white};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding: 0 10px 0 10px;
  border-left: 1px solid ${theme.color.white};
  border-right: 1px solid ${theme.color.white};
`;
