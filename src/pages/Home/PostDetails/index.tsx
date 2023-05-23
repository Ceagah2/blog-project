import { useLocation } from "react-router-dom";
import Star from "../../../assets/images/star.png";
import HomeLayout from "../../../components/layouts/Home";
import { PostProps } from "../../../components/molecules/Post/types";
import { Content } from "../Posts/styles";
import {
  CommentSection,
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  ContentImage,
  ContentSubtitle,
  ContentText,
  ContentTitle,
  FooterDetails,
  FooterLine,
  FooterLocation,
  FooterText,
  PartnerLogo,
  PartnerText,
} from "./styles";

const PostDetails = () => {
  const location = useLocation();
  const data: PostProps = location.state;

  const parts = data.location.address?.split(/\s+/) ?? [];
  const formatedAddress = parts.join("+");

  const Navigator = () => {
    const googleNavigation = `https://www.google.com/maps/search/?api=1&query=${formatedAddress},${data.location.number},${data.location.zipcode}`;
    window.open(googleNavigation, "_blank");
  };

  const newDate = new Date(data.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <HomeLayout>
      <Container>
        <Content>
          <ContentHeader>
            {data.isAdvertising && <PartnerLogo src={Star} />}
            <ContentTitle>{data.title}</ContentTitle>
          </ContentHeader>
          <ContentSubtitle>{data.subtitle}</ContentSubtitle>
          <ContentBody>
            <ContentText>{data.body}</ContentText>
            {data.imageUrl && <ContentImage src={data.imageUrl} />}
          </ContentBody>
          {data.isAdvertising && (
            <PartnerText>Restaurante Parceiro</PartnerText>
          )}
          <ContentFooter>
            <FooterLine>
              <FooterDetails>Criado em : </FooterDetails>
              <FooterText>{newDate}</FooterText>
            </FooterLine>
            <FooterLine>
              <FooterDetails>Postado por :</FooterDetails>
              <FooterText>{data.createdBy}</FooterText>
            </FooterLine>
          </ContentFooter>
          <FooterLine>
            <FooterLocation onClick={() => Navigator()}>
              Ver no mapa
            </FooterLocation>
          </FooterLine>
        </Content>
        <CommentSection>
          <h2>Comentários</h2>
        </CommentSection>
      </Container>
    </HomeLayout>
  );
};

export default PostDetails;
