import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 73px;
  padding: 0 24px;
`;

export const Nav = styled.nav`
  & > ul {
    display: flex;
    list-style: none;

    & > li {
      font-size: 12px;
    }

    & > li:not(:last-child) {
      margin-right: 25px;
    }
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 80px;
`;
