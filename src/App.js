import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [text, setText] = useState("Default Value");

  return (
    <div className="App">
      <Header />
      <Info
        heading={"Heading 0"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        buttonHeading={"Visit Site"}
      />

      <Button
        text={"Read More"}
        onClick={() => {
          setText("Read More was clicked!");
        }}
      />

      <Button
        text={"Read Less"}
        onClick={() => {
          setText("Read Less was clicked!");
        }}
      />
      <h1 style={{ margin: "1rem" }}>{text}</h1>
    </div>
  );
}

export default App;
