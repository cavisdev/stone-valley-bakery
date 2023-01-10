import { RouteObject, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.styles";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import GiftCards from "./components/routes/GiftCards";
import Menu from "./components/routes/Menu";
import Order from "./components/routes/Order";
import Navbar from "./components/Navbar";
import DropMenu from "./components/DropMenu";
import { MainBody } from "./styles/App.styles";
import Footer from "./components/Footer";

function App() {
  let routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/gift-cards", element: <GiftCards /> },
    { path: "/menu", element: <Menu /> },
    { path: "/order", element: <Order /> },
  ];

  let element = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {element}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
