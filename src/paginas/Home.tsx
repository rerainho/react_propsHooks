import React from "react";
import "./Home.css";

interface minhaProps {
  title: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Home(_props:minhaProps) {
  return (
    <>
      <h2>(props.title)</h2>
      <p>(props.description)</p>
    </>
  );
}

export default Home;
