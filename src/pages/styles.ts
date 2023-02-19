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

export const SecondContainer = styled(Container)`
  padding-top: 45px;
  background-color: ${colors.colors.neutral.lightGrayishBlue};
  padding-bottom: 75px;

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
