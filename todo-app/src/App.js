import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "./components/Layout.jsx";

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
      <Layout />
    </ChakraProvider>
  );
}

export default App;
