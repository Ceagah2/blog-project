import { styled } from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.nav`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  background: ${theme.color.lightGrey};
`;

export const Menu = styled.div``;
export const MenuIcon = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const Profile = styled.div``;
export const ProfilePic = styled.img`
  width: 50px;
  cursor: pointer;
`;
