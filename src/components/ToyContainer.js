import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysList, onDeletePlant, onUpdateToy }) {  
  function populateToysList() {
    return toysList.map((toy) => (
      <ToyCard toysList={toy} key={toy.id} onDeletePlant={onDeletePlant} onUpdateToy={onUpdateToy} />
    ));
  }

  return (
    <div id="toy-collection">{populateToysList()}</div>
  );
}

export default ToyContainer;
