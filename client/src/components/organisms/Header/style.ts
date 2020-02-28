import styled from "styled-components";

export const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#718093"
  },
  bmBurgerBarsHover: {
    background: "#969fab"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "230px"
  },
  /**
   *  Menu Wrapper styles
   */
  bmMenu: {
    background: "#373a47",
    // padding: "2.5em 1.5em 0",
    padding: 0,
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    padding: "0.8em",
    listStyle: "none"
  },
  bmItem: {},
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export const ProfileWrapper = styled.div`
  display: grid;
  width: 150px;
  grid-auto-flow: column;
  column-gap: 10px;
  justify-content: left;
  margin-bottom: 2rem; /** distance between Profile and item-list */
`;

export const ItemsWrapper = styled.div`
  margin-left: 10px; /** distance between left of screen and item-list */
`;

export const AvatarWrapper = styled.section`
  width: 3rem;
  height: 3rem;
`;

export const TypographyWrapper = styled.section`
  padding: 10px 0;
`;
