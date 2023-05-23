import { UserData } from "../../../mock/user";
import { Container } from "./styles";
const Avatar = () => {
  return <Container src={UserData[0].avatarUrl} />;
};

export default Avatar;
