import React, { useState, useEffect } from "react";
import "./App.css";

function Demo() {
  const width = useWindowWidth();
  const name = useFormInput("Marry");
  const surname = useFormInput("Porter");

  useEffect(() => {
    document.title = name.value + " " + surname.value;
  });

  return (
    <div className="form-container">
      <div className="form-item">
        <div>{name.value}</div>
        <input {...name} />
      </div>

      <div className="form-item">
        <div>{surname.value}</div>
        <input {...surname} />
      </div>

      <div className="form-item">
        <div>{width}</div>
      </div>
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}

function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

export default App;
