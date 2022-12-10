import { createGlobalStyle } from "styled-components";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Main from "./componentes/Main/Main";

const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
}`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
