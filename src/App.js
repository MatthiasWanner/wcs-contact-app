import React from "react";
import Contact from "./components/js/Contact";
import './App.css';

function App() {
  return (
    <Contact
      name="Matthias"
      avatar="https://picsum.photos/id/1043/200/200"
      online={true}
    />
  );
}

export default App;
