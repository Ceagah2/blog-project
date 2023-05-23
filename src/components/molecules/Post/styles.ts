import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${theme.spacing.medium};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const AdvertisingImage = styled.img`
  width: 10%;
`;
export const Title = styled.h1`
  align-self: center;
  color: ${theme.color.purple};
  font-family: ${theme.fonts.heading};
`;
export const Location = styled.span`
  cursor: pointer;
  line-height: ${theme.fontSizes.extra};
  color: ${theme.color.success};
  font-size: ${theme.fontSizes.heading};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`;
export const Advertising = styled.span`
  line-height: ${theme.fontSizes.extra};
  color: ${theme.color.error};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`;
export const Body = styled.p`
  text-align: flex-start;
  align-self: flex-start;
  color: ${theme.color.black};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  padding: 0.8rem 0 0.8rem 0;
`;
export const ImageUrl = styled.img`
  width: 100%;
`;
export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 85%;
`;
export const FooterLine = styled.div``;
export const FooterText = styled.span`
  color: ${theme.color.black};
  font-size: ${theme.fontSizes.details};
  font-family: ${theme.fonts.body};
`;
export const FooterDetail = styled.span`
  color: ${theme.color.darkGrey};
  font-size: ${theme.fontSizes.details};
  font-family: ${theme.fonts.body};
`;
