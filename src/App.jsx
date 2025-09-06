import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Introduction from "./components/Introduction/Introduction";
import Contact from "./components/Contact/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Introduction />
          <Hero />
          <Portfolio />
          <Contact />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
