import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">hello world</Heading>
        <Heading as="h2">hello world</Heading>
        <Heading as="h3">hello world</Heading>
        <Button onClick={() => alert("chike in")}>cheke in</Button>
        <Input type="number" placeholder="Number guests" />
      </StyledApp>
    </>
  );
}

export default App;
