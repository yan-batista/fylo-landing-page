import styled from "styled-components";
import { devices } from "../../styles/devices";
import colors from "../../styles/colors";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 73px;
  padding: 0 24px;

  @media ${devices.desktop} {
    width: 95%;

    margin-top: 54px;
    margin-left: 54px;
  }
`;

export const Nav = styled.nav`
  & > ul {
    display: flex;
    list-style: none;

    & > li {
      font-size: 12px;

      & > a {
        text-decoration: none;
        color: ${colors.colors.primary.darkBlue};
      }
    }

    & > li:not(:last-child) {
      margin-right: 25px;
    }
  }

  @media ${devices.desktop} {
    margin-right: 40px;
    & > ul {
      & > li {
        font-size: 16px;
      }

      & > li:not(:last-child) {
        margin-right: 57px;
      }
    }
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 80px;

  @media ${devices.desktop} {
    width: 170px;
  }
`;
