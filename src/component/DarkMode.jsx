import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; // access to html element

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
