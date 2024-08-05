import React, { useState } from "react";
import Home from "./paginas/Home";
import "./App.css";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valor, setValor] = useState(0);

  return (
    <Home
      title="Página de inicio"
      description="Reportagem do dia que receberá as props de repetição"
    />
  );
}

export default App;
