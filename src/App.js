import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/contact-details/contact-details";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InvestmentPlan from "./components/investment-plans/investment-plans";
import InvestmentPreferences from "./components/investment-preferences/investment-preferences";

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
          <Route path="/investment-plan" element={<InvestmentPlan />} />
          <Route path="/investment-preferences" element={<InvestmentPreferences />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
