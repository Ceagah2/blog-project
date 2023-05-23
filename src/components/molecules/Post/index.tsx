import Star from "../../../assets/images/star.png";
import {
  Advertising,
  AdvertisingImage,
  Body,
  Container,
  ContainerFooter,
  Content,
  ContentHeader,
  FooterDetail,
  FooterLine,
  FooterText,
  ImageUrl,
  Location,
  Title,
} from "./styles";
import { type PostProps } from "./types";

const Post = (props: PostProps) => {
  const parts = props.location.address?.split(/\s+/) ?? [];
  const formatedAddress = parts.join("+");
  const Navigator = () => {
    const googleNavigation = `https://www.google.com/maps/search/?api=1&query=${formatedAddress},${props.location.number},${props.location.zipcode}`;
    window.open(googleNavigation, "_blank");
  };

  const newDate = new Date(props.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Container>
      <Content onClick={props.onClick}>
        <ContentHeader>
          {props.isAdvertising && <AdvertisingImage src={Star} />}
          <Title>{props.title}</Title>
        </ContentHeader>
        <Body>{props.subtitle}</Body>
        {props.imageUrl && <ImageUrl src={props.imageUrl} />}
        {props.isAdvertising && <Advertising>Restaurante Parceiro</Advertising>}
      </Content>
      <ContainerFooter>
        <FooterLine>
          <FooterText>Postado por: </FooterText>
          <FooterDetail>{props.createdBy}</FooterDetail>
        </FooterLine>
        <FooterLine>
          <FooterText>Criado em: </FooterText>
          <FooterDetail>{newDate}</FooterDetail>
        </FooterLine>
      </ContainerFooter>
      <FooterLine>
        <Location onClick={Navigator}> Ver no mapa</Location>
      </FooterLine>
    </Container>
  );
};

export default Post;
