import React from "react";

function Messi({ nickname: n }) {
  return (
    <div>
      <h1>Messi is the {n}.</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is my first react app.</p>
      <Messi nickname="best forward" />
      <Messi nickname="best midfielder" />
      <Messi nickname="best dribbler" />
      <Messi nickname="best player" />
      <Messi nickname="GOAT" />
    </div>
  );
}

export default App;
