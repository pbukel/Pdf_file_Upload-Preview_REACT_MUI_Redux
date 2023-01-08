import styled from "styled-components";
import ResponsiveDrawer from "./components/Mui";

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Container>
      <ResponsiveDrawer />
    </Container>
  );
}

export default App;
