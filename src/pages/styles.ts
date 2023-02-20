import styled from "styled-components";
import colors from "../styles/colors";

type Props = {
  mt?: string;
};

export const Center = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Center)`
  margin-top: ${(props) => props.mt};

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
      font-weight: 400px;
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
        width: 100%;
        height: 42px;
        border: 1px solid black;
        text-indent: 20px;
      }

      & > button {
        border-radius: 4px;
        margin-top: 15px;
        width: 100%;
        height: 42px;

        font-weight: 700;
        font-size: 14px;

        background-color: ${colors.colors.accent.brightBlue};

        border: none;
        color: white;
      }
    }
  }
`;

export const AccessContainer = styled(Container)`
  color: white;
  background-color: ${colors.colors.primary.dessaturatedBlue};
  padding-top: 14px;
  padding-bottom: 70px;

  & > .container-text {
    & > h1 {
      letter-spacing: 1px;
      font-size: 17px;
    }

    & > p {
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
`;

export const SecondContainer = styled(Container)`
  padding-top: 45px;
  background-color: ${colors.colors.neutral.lightGrayishBlue};
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
`;

export const Footer = styled.footer`
  background-color: ${colors.colors.primary.darkBlue};
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

  color: ${colors.colors.accent.moderateCyan};
  font-size: 12px;

  border-bottom: 1px solid ${colors.colors.accent.moderateCyan};
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
}))`
  width: 310px;
`;

export const BackgroundCurve = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 50px;
  margin-top: 90px;
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 170px;
`;
