import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/theme-context";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Retrieve theme from localStorage when the component mounts
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Update the root div to reflect the current theme */}
      <div className={`h-full flex flex-col theme-${theme}`}>
        <div className="flex-grow background-color p-8 w-full flex flex-col justify-start ">
          <header className="w-full flex justify-between title-theme max-w-5xl my-0 mx-auto">
            <h1 className="text-4xl font-bold flex items-center gap-2">
              <span role="img" aria-label="globe">
                🌐
              </span>{" "}
              Home Work Demo
            </h1>
            <nav className="flex items-center gap-8 ">
              <Link to="/" className="text-theme hover:underline text-xl">
                Main
              </Link>
              <Link to="/about" className="text-theme hover:underline text-xl">
                About
              </Link>
              <Link
                to="/contact"
                className="text-theme hover:underline text-xl"
              >
                Contact
              </Link>

              <input
                className="toggle-btn__input btn-light-dark"
                type="checkbox"
                name="checkbox"
                onChange={handleThemeChange}
                checked={theme === "light"}
              />
            </nav>
          </header>
          <main className="w-full pb-8 max-w-5xl my-0 mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
