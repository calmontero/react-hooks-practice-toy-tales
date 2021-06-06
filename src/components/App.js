import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toy, setToy] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleHide() {
    setShowForm(false);
  }

  useEffect(() => (
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((toysData) => setToy(toysData))
  ), []);

  function handleAddToy(newToy) {
    const updatedToys = [...toy, newToy];
    setToy(updatedToys);
  }

  function handleDeleteToy(id) {
    const updatedToys = toy.filter((toyList) => toyList.id !== id);
    setToy(updatedToys);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toy.map((toyList) => {
      if (toyList.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toyList;
      }
    });
    setToy(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
        <button onClick={handleHide} >Hide Form</button>
      </div>
      <ToyContainer toysList={toy} onDeletePlant={handleDeleteToy} onUpdateToy={handleUpdateToy} />
    </>
  );
}

export default App;
