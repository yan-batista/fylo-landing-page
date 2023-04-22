import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { devices } from "../styles/devices";

type Props = {
  mt?: string;
};

type IllustrationProps = {
  smWidth?: string;
  lgWidth?: string;
};

export const Center = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Center)`
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};

  & > .container-text {
    margin-top: 35px;
    width: 90%;

    text-align: center;
    line-height: 35px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
      font-size: 25px;
      letter-spacing: 0.3px;
      font-weight: 400;
    }

    & > p {
      margin-top: 25px;
      font-size: 14px;
      width: 90%;
      line-height: 21px;
    }

    & > .container-email {
      display: flex;
      flex-direction: column;

      margin-top: 32px;
      width: 92%;
      padding-left: 5px;

      & > input {
        border-radius: 4px;
        height: 42px;
        border: 1px solid black;
        text-indent: 20px;
      }

      & > button {
        border-radius: 4px;
        margin-top: 15px;
        height: 42px;

        font-weight: 700;
        font-size: 14px;

        background-color: ${colors.accent.brightBlue};

        border: none;
        color: white;

        cursor: pointer;
      }

      & > button:hover {
        filter: brightness(120%);
      }
    }
  }

  @media ${devices.desktop} {
    &&.firstContainer {
      display: flex;
      flex-direction: row-reverse;
      margin-left: 3px;
      margin-top: 0;
    }

    & > .container-text {
      text-align: start;
      align-items: flex-start;
      width: 40%;

      & > h1 {
        font-size: 40px;
        max-width: 600px;
        line-height: 60px;
      }

      & > p {
        font-size: 18px;
        line-height: 25px;

        margin-top: 16px;
        width: 600px;
      }

      & > .container-email {
        flex-direction: row;
        align-items: center;

        padding-left: 0;
        margin-top: 20px;

        & > input {
          width: 74%;
          text-indent: 20px;
        }

        & > button {
          margin-top: 0;
          margin-left: 15px;
          width: 45%;
        }
      }
    }
  }
`;

export const AccessContainer = styled(Container)`
  color: white;
  background-color: ${colors.primary.desaturatedBlue};
  padding-top: 14px;
  padding-bottom: 70px;
  width: 100%;

  & > .container-text {
    & > .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & > .text-container > h1 {
      letter-spacing: 1px;
      font-size: 17px;
    }

    & > .text-container > p {
      max-width: 90%;
      font-size: 16px;
      text-align: center;
      line-height: 25px;
      margin-top: 10px;
    }

    & > .container-email {
      width: 75%;
      margin-top: 22px;

      & > input {
        height: 35px;
      }

      & > button {
        margin-top: 5px;
        height: 35px;
      }
    }
  }

  @media ${devices.desktop} {
    padding-bottom: 80px;

    & > .container-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      margin-top: 90px;
      width: 90%;

      & > .text-container {
        align-items: start;
        max-width: 43%;
        padding-left: 6px;
      }

      & > .text-container > h1 {
        font-size: 35px;
        text-align: start;
        letter-spacing: 0;
      }

      & > .text-container > p {
        font-size: 16px;
        text-align: start;
        margin-top: 25px;
      }

      & > .container-email {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 5px;
        margin-left: 210px;

        & > input {
          height: 50px;
          width: 90%;
        }

        & > button {
          margin-top: 15px;
          margin-left: 0;
          height: 50px;
          max-width: 200px;
        }
      }
    }
  }
`;

export const SecondContainer = styled(Container)`
  padding-top: 45px;
  background-color: ${colors.neutral.lightGrayishBlue};
  padding-bottom: 75px;
  width: 100%;

  & > .container-text {
    margin-top: 89px;

    & > h1 {
      font-size: 16px;
    }

    & > p {
      text-align: left;
      margin-top: 15px;
      margin-left: -25px;
    }
  }

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row-reverse;
    padding-top: 30px;
    padding-bottom: 105px;

    & > .container-text {
      width: 50%;

      & > h1 {
        font-size: 42px;
        font-weight: 700;
        max-width: 700px;
        margin-bottom: 15px;
      }

      & > p {
        margin-left: 0;
        margin-top: 15px;
      }

      & a {
        font-size: 16px;
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: ${colors.primary.darkBlue};
  color: white;

  width: 100%;
  padding-top: 65px;
  padding-left: 40px;

  & a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  & .footer-link:not(:first-child) {
    margin-top: 19px;
  }

  & > .contact-info {
    margin-top: 40px;

    & > img {
      filter: brightness(0%) invert(100%);
    }
  }

  & .icon-container {
    display: flex;
    margin-left: -10px;

    & > img {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }

  & .icon-container:not(:first-child) {
    margin-top: 20px;
  }

  & > .about-us {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  & > .extra-info {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  & > .links {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 48px;
    padding-bottom: 50px;
    width: 85%;

    & img {
      filter: invert();

      border: 1px solid black;
      border-radius: 50%;

      padding: 5px;
      width: 30px;
      height: 30px;
    }
  }
`;

export const LinkIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${colors.accent.moderateCyan};
  font-size: 12px;

  border-bottom: 1px solid ${colors.accent.moderateCyan};
  margin-top: 30px;
`;

export const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

export const Illustration = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))<IllustrationProps>`
  width: ${(props) => props.smWidth};

  @media ${devices.desktop} {
    width: ${(props) => props.lgWidth};
    margin-left: 60px;
    margin-top: 65px;
  }
`;

export const BackgroundCurve = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 50px;
  margin-top: 90px;

  @media ${devices.desktop} {
    margin-top: 170px;
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 170px;
`;
