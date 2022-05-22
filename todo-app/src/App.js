import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Completed from "./pages/Completed.jsx";

const colors = {
  brand: {
    900: "#FFA0A0",
    800: "#7A9CF3",
    700: "#8DDBCD"
  }
}

const theme = extendTheme({ colors });

function App() {
  return (
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/completed" element={<Completed />}/>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
