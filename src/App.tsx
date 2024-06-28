import "./App.scss";

import Router from "./routes/section";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
