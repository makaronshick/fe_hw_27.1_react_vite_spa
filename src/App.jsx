import { useState } from "react";
import ThemeContext from "./ThemeContext.js";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import ToDoList from "./components/toDoList/ToDoList.jsx";
import About from "./components/about/About.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import ErrorBoundary from "./components/errorBounary/ErrorBoundary.jsx";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="app_footer">
          <button onClick={toggleTheme}> Toggle theme </button>
        </footer>
      </ErrorBoundary>
    </ThemeContext.Provider>
  );
}

export default App;
