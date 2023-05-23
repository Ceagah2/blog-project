import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.lightGrey};
`;
export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ContentTitle = styled.h1`
  align-self: center;
  color: ${theme.color.purple};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.extra};
`;
export const ContentSubtitle = styled.span`
  align-self: center;
  color: ${theme.color.darkGrey};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.heading};
`;
export const PartnerLogo = styled.img`
  width: 10%;
`;

export const ContentBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${theme.spacing.large};
`;
export const ContentText = styled.p``;
export const ContentImage = styled.img`
  margin-top: ${theme.spacing.large};
  width: 100%;
`;
export const PartnerText = styled.span`
  line-height: ${theme.fontSizes.extra};
  color: ${theme.color.error};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`;
export const ContentFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FooterLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterText = styled.span`
  color: ${theme.color.darkGrey};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.details};
`;
export const FooterDetails = styled.span`
  color: ${theme.color.black};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.details};
  margin-right: 5px;
`;
export const FooterLocation = styled.span`
  color: ${theme.color.purple};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.heading};
  line-height: ${theme.spacing.large};
  text-transform: uppercase;
  margin: ${theme.spacing.large};
  cursor: pointer;
`;

export const CommentSection = styled.div`
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${theme.color.white};
`;
