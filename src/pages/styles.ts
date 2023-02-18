import styled from "styled-components";
import colors from "../styles/colors";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Center)`
  margin-top: 73px;

  & > .container-text {
    margin-top: 40px;
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

export const Illustration = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 305px;
`;
