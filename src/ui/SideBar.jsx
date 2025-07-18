import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSideBar = styled.aside`
  background-color: var(--color-gray-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-gray-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />

      <Uploader />
    </StyledSideBar>
  );
}

export default SideBar;
