import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>hello world</H1>
        <Button onClick={() => alert("chike in")}>cheke in</Button>
        <Input type="number" placeholder="Number guests" />
      </StyledApp>
    </>
  );
}

export default App;
