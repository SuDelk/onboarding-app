import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/contact-details";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif", // Use Montserrat as the default font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<ContactDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
