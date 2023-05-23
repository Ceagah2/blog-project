import Header from "../../molecules/Header";
import { Container, Content } from "./styles";
import { type LayoutProps } from "./types";

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default HomeLayout;
