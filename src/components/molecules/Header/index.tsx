import { useNavigate } from "react-router-dom";
import { Container, Logo, Menu, MenuIcon, Profile, ProfilePic } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const MenuImgUrl =
    "https://cdn.icon-icons.com/icons2/1776/PNG/512/multipleline_114207.png";
  const ImageUrl = "https://placehold.co/200x50?text=Vale-Food";
  const AvatarUrl =
    "https://cdn.icon-icons.com/icons2/3066/PNG/512/user_person_profile_avatar_icon_190943.png";
  return (
    <Container>
      <Menu>
        <MenuIcon src={MenuImgUrl} />
      </Menu>
      <Logo src={ImageUrl} onClick={() => navigate("/")} />
      <Profile>
        <ProfilePic src={AvatarUrl} />
      </Profile>
    </Container>
  );
};

export default Header;
