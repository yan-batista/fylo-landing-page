import styled from "styled-components";
import colors from "../../styles/colors";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;

  width: 80%;
  padding: 20px 20px;
  margin-top: 35px;

  line-height: 18px;
  text-align: start;

  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);

  & > p {
    color: ${colors.primary.darkBlue};
    font-size: 12px;
    margin-top: 5px;
  }

  & > .person-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 15px;

    & > .person-name {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 10px;

      & > p {
        color: ${colors.primary.darkBlue};
        font-size: 12px;
      }

      & > .name {
        font-weight: bold;
      }
    }
  }

  @media ${devices.desktop} {
    width: 50%;

    & > p {
      font-size: 16px;
    }
  }
`;

export const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 15px;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 30px;
  border-radius: 50%;
`;
