import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;

  width: 75%;
  padding: 20px 25px;
  margin-top: 35px;

  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);

  & > p {
    color: ${colors.colors.primary.darkBlue};
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
        color: ${colors.colors.primary.darkBlue};
        font-size: 12px;
      }

      & > .name {
        font-weight: bold;
      }
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
