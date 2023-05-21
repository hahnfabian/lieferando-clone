import { useState } from "react";

export default function Gericht() {
  const [nummer, setNummer] = useState(0);

  const addNum = () => {
    setNummer(prevNum => prevNum + 3);
  };

  return (
    <>
      <h1>Anzahl: {nummer}</h1>
      <button type="button" onClick={addNum}>
        add 3
      </button>
    </>
  );
}