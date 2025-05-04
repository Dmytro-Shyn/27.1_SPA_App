import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeContext } from "./contexts/theme-context";
import { useState } from "react";

const MainApp = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
