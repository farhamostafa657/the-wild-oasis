import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

import { is } from "date-fns/locale";
const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
